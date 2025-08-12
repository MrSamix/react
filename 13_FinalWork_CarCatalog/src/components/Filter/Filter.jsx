import { useContext, useEffect } from 'react';
import './Filter.css'
import { InputNumber, Select } from "antd";
import { CarsContext } from '../../context/CarsContext';

function Filter() {
    const { cars, filter, language, changeFilter } = useContext(CarsContext)
    
    const brands = Array.from(new Set(cars.map(car => car.brand))).map(brand => ({
        value: brand,
        label: brand
    }));

    const colors = Array.from(new Set(cars.map(car => car.color[language === "en" ? "en" : "ua"]))).map(color => ({
        value: color,
        label: color
    }));
    console.log('====================================');
    console.log(colors);
    console.log('====================================');
    // brands.unshift({ value: '', label: 'All Brands' }); // Add an option for all brands
    // const brands = [
    //     { value: '', label: 'All Brands' },
    //     { value: 'Toyota', label: 'Toyota' },
    //     { value: 'Honda', label: 'Honda' },
    //     { value: 'Ford', label: 'Ford' },
    //     { value: 'BMW', label: 'BMW' },
    //     { value: 'Mercedes', label: 'Mercedes' },
    // ];
    const handleChangeBrand = (value) => {
        console.log(`selected ${value}`);
        changeFilter({ ...filter, brand: value });
    };
    const handleChangeColor = (value) => {
        const colorObj = cars.map(c => c.color).find(color => color.en === value || color.ua === value);
        console.log('====================================');
        console.log(colorObj);
        console.log('====================================');
        // if (colorObj === undefined) {
        //     changeFilter({ color: null });
        //     return;
        // }
        // // else if (value === )
        changeFilter({ ...filter, color: colorObj });
    };

    useEffect(() => {
        console.log('Cars changed:', cars);
        console.log('Filter brand:', filter.brand);
        if (!cars.map(car => car.brand).includes(filter.brand)) {
            changeFilter({ brand: null });
        }
    }, [cars]);

  return (
    <div className='filter'>
        {/* Brand */}
        <h3>Brand: </h3>
        <Select 
        style={{minWidth: '100px'}} 
        defaultValue={filter.brand}
            allowClear
            value={filter.brand}
            onChange={handleChangeBrand} 
            name="brand" 
            id="brandOption"
            placeholder="Select a brand"
            options={brands}></Select>
        {/* Year */}
        <h3>Year: </h3>
        <InputNumber min={0} max={new Date().getFullYear()} />
        {/* Color */}
        <h3>Color: </h3>
        <Select
            style={{ minWidth: '100px' }}
            defaultValue={language === "en" ? filter.color?.en : filter.color?.ua}
            allowClear
            value={language === "en" ? filter.color?.en : filter.color?.ua}
            onChange={handleChangeColor}
            name="color"
            id="colorOption"
            placeholder="Select a color"
            options={colors}
            ></Select>
    </div>
  )
}

export default Filter