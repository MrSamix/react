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
    const handleChangeBrand = (value) => {
        changeFilter({ ...filter, brand: value });
    };
    const handleChangeColor = (value) => {
        const colorObj = cars.map(c => c.color).find(color => color.en === value || color.ua === value);
        changeFilter({ ...filter, color: colorObj });
    };
    const handleChangeYear = (value) => {
        changeFilter({ ...filter, year: value });
    };
    const handleChangeVolume = (value) => {
        changeFilter({ ...filter, volume: value });
    };
    const handleChangePriceFrom = (value) => {
        changeFilter({ 
            ...filter, 
            priceRange: [
                value, 
                filter.priceRange && filter.priceRange[1] !== undefined ? filter.priceRange[1] : undefined
            ]});
    };
    const handleChangePriceTo = (value) => {
        changeFilter({ 
            ...filter, 
            priceRange: [
                filter.priceRange && filter.priceRange[0] !== undefined ? filter.priceRange[0] : undefined, 
                value
            ] 
        });
    };

    // change later
    useEffect(() => {
        if (!cars.map(car => car.brand).includes(filter.brand)) {
            changeFilter({ brand: null });
        }
        if (!cars.map(car => car.color).find(color => color.en === filter.color?.en || color.ua === filter.color?.ua)) {
            changeFilter({ color: null });
        }
        if (!cars.map(car => car.year).includes(filter.year)) {
            changeFilter({ year: null });
        }
        if (!cars.map(car => car.volume).includes(filter.volume)) {
            changeFilter({ volume: null });
        }
        if ( filter.priceRange && !cars.map(car => car.price).includes(filter.priceRange[0]) && !cars.map(car => car.price).includes(filter.priceRange[1])) {
            changeFilter({ priceRange: [null, null] });
        }
    }, [cars]);

  return (
    <div className='filter'>
        <div>
            {/* Brand */}
            <h3>{language === "en" ? "Brand: " : "Бренд: "}</h3>
            <Select
                style={{ minWidth: '100px' }}
                defaultValue={filter.brand}
                allowClear
                value={filter.brand}
                onChange={handleChangeBrand} 
                name="brand" 
                id="brandOption"
                placeholder={language === "en" ? "Select a brand" : "Виберіть бренд"}
                options={brands}></Select>
        </div>
        <div>
            {/* Year */}
            <h3>{language === "en" ? "Year: " : "Рік: "}</h3>
            <InputNumber onChange={handleChangeYear} min={0} max={new Date().getFullYear()} value={filter.year} />
        </div>        
        <div>
            {/* Color */}
            <h3>{language === "en" ? "Color: " : "Колір: "}</h3>
            <Select
                style={{ minWidth: '100px' }}
                defaultValue={language === "en" ? filter.color?.en : filter.color?.ua}
                allowClear
                value={language === "en" ? filter.color?.en : filter.color?.ua}
                onChange={handleChangeColor}
                name="color"
                id="colorOption"
                placeholder={language === "en" ? "Select a color" : "Виберіть колір"}
                options={colors}
                ></Select>
        </div>
        <div>
            {/* Volume */}
            <h3>{language === "en" ? "Volume: " : "Об'єм: "}</h3>
            <InputNumber onChange={handleChangeVolume} min={0} max={Math.max(...cars.map(car => car.volume))} value={filter.volume} />
        </div>
        <div>
            {/* Price */}
            <h3>{language === "en" ? "Price: " : "Ціна: "}</h3>
            <InputNumber style={{margin: "0px 15px"}} onChange={handleChangePriceFrom} placeholder={language === "en" ? "From" : "Від"} min={0} value={filter.priceRange?.at(0)} />
            <InputNumber onChange={handleChangePriceTo} placeholder={language === "en" ? "To" : "До"} min={0} value={filter.priceRange?.at(1)} />
        </div>
        
    </div>
  )
}

export default Filter