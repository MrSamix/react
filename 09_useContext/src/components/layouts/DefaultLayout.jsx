import { Container } from "@mui/material";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

const DefaultLayout = ({user}) => {
    return (
        <>
            <Navbar user={user} />
            <Container sx={{minHeight: "100vh", mt: 2}}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default DefaultLayout;
