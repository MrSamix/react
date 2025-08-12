import { useContext, useState } from "react";
import { CarsContext } from "../../context/CarsContext";
import "./CarCard.css";
import {Button, Modal} from "antd";
import CarForm from "../CarForm/CarForm";
import DeleteCarModal from "../DeleteCarModal/DeleteCarModal";

function CarCard({brand, model, year, price, volume, color, description, id}) {
  const {cars, language, editCar, deleteCar} = useContext(CarsContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const editingCar = () => {
    setIsEditModalOpen(true);
    console.log('Editing car with color:', color);
  }
  const removingCar = () => {
    setIsDeleteModalOpen(true);
  };
  const handleOk = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };
  const handleCancel = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="car-card">
        <h2>{brand}</h2>
        <h3>{model}</h3>
        <p>{language === "en" ? "Year" : "Рік"}: {year}</p>
        <p>{language === "en" ? "Volume" : "Об'єм"}: {volume}</p>
        <p>{language === "en" ? "Color" : "Колір"}: {language === "en" ? color.en : color.ua}</p>
        <p>{language === "en" ? "Description" : "Опис"}: {description}</p>
        <h2>{language === "en" ? "Price" : "Ціна"}: {price}$</h2>
        <Button id="edit" variant="solid" color="yellow" onClick={() => editingCar()}>{language === "en" ? "Edit" : "Редагувати"}</Button>
        <Button id="delete" variant="solid" color="red" onClick={() => removingCar()}>{language === "en" ? "Delete" : "Видалити"}</Button>
        <DeleteCarModal activate={isDeleteModalOpen} onClose={() => handleCancel()} id={id} />
        <CarForm activate={isEditModalOpen} onClose={() => handleCancel()} editMode id={id} brand={brand} model={model} year={year} volume={volume} price={price} color={color} description={description} />
    </div>
  )
}

export default CarCard