import { useContext, useState } from 'react';
import CarForm from '../CarForm/CarForm'
import { Button } from 'antd'
import { CarsContext } from '../../context/CarsContext';
function AddCarBtn() {
    const [activate, setActivate] = useState(false);
    const {language} = useContext(CarsContext);
    const showModal = () => {
        setActivate(true);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>{language === "en" ? "Add Car" : "Додати Авто"}</Button>
            {/* Рендеримо форму завжди, модалка керується пропом open */}
            <CarForm activate={activate} onClose={() => setActivate(false)} />
        </>
    );
}

export default AddCarBtn