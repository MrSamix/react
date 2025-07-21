import { useState, useEffect } from "react";
import { Typography, Grid, Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CategoryCard from "../../components/cards/CategoryCard";
import { Link } from "react-router";

const data = [
    {
        name: "Пральні машини",
        description: "Пральні машини",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476855785.png",
    },
    {
        name: "Акумуляторні пилососи",
        description: "Акумуляторні пилососи",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476858628.png",
    },
    {
        name: "Холодильники",
        description: "Холодильники",
        image: "https://content.rozetka.com.ua/constructor/images_site/original/476858800.png",
    },
    {
        name: "Мультипічки і аерогрилі",
        description: "Мультипічки і аерогрилі",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476858824.png",
    },
    {
        name: "Зубні щітки",
        description: "Зубні щітки",
        image: "https://content.rozetka.com.ua/constructor/images_site/original/476858833.png",
    },
    {
        name: "Обігрівачі",
        description: "Обігрівачі",
        image: "https://content1.rozetka.com.ua/constructor/images_site/original/476858856.png",
    },
    {
        name: "Велика побутова техніка",
        description: "Велика побутова техніка",
        image: "https://content1.rozetka.com.ua/constructor/images_site/original/325504069.png",
    },
];

const CategoryListPage = () => {
    const [categories, setCategories] = useState(data);

    // код у useEffect спрацює тільки при першому рендері компоненті
    useEffect(() => {
        const localData = localStorage.getItem("categories");
        if (localData) {
            setCategories(JSON.parse(localData));
        } else {
            setCategories(data);
            localStorage.setItem("categories", JSON.stringify(data));
        }
    }, []);

    // delete category
    const handleDelete = (name) => {
        const newCategories = categories.filter(c => c.name !== name);
        setCategories(newCategories);
        localStorage.setItem("categories", JSON.stringify(newCategories));
    }

    return (
        <>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Категорії
            </Typography>
            <Grid container spacing={1} mx={3} mt={5} mb={2}>
                {categories.map((category, index) => (
                    <Grid key={index} size={3}>
                        <CategoryCard category={category} deleteCallback={handleDelete} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: "end", mb: 2, mx: 4 }}>
                <Link to="create">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
            </Box>
        </>
    );
};

export default CategoryListPage;
