import { useContext } from "react";
import { CarsContext } from "../../context/CarsContext";
import CarCard from "../CarCard/CarCard";




function CarList() {
    const {cars, filter} = useContext(CarsContext);
    
    function filterCars(cars, filter) {
        return cars.filter(car => {
            return (!filter.brand || car.brand === filter.brand) &&
                   (!filter.year || car.year === filter.year) &&
                   (!filter.color || (car.color.en === filter.color.en || car.color.ua === filter.color.ua)) &&
                   (!filter.priceRange || (car.price >= filter.priceRange[0] && car.price <= filter.priceRange[1])) &&
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