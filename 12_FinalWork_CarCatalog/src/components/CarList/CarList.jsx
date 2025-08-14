import { useContext } from "react";
import { CarsContext } from "../../context/CarsContext";
import CarCard from "../CarCard/CarCard";
import "./CarList.css";




function CarList() {
    const {cars, filter} = useContext(CarsContext);
    
    function filterCars(cars, filter) {
        return cars.filter(car => {
            const inPriceRange = (() => {
                if (!filter.priceRange) return true;
                const [min, max] = filter.priceRange;
                if (min == null && max == null) return true;
                if (min == null) return car.price <= max;
                if (max == null) return car.price >= min;
                return car.price >= min && car.price <= max;
            })();

            return (!filter.brand || car.brand === filter.brand) &&
                   (!filter.year || car.year === filter.year) &&
                   (!filter.color || (car.color.en === filter.color.en || car.color.ua === filter.color.ua)) &&
                   inPriceRange &&
                   (!filter.volume || car.volume === filter.volume);
        });
    }
    // console.log("Cars:",filterCars(cars, filter));

    return (
        <div className="car-list">
            {filterCars(cars, filter).map(car => (
                <CarCard key={car.id} {...car} />
            ))}
        </div>
    );
}

export default CarList