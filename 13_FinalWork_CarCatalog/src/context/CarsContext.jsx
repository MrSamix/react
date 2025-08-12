// import { createContext } from "react";

// export const CarListContext = createContext();

// export const CarListProvider = ({ children }) => {
//     const [cars, setCars] = useState([]);
//     const addCar = (car) => {
//         setCars([...cars, car]);
//     };
//     const deleteCar = (id) => {
//         setCars(cars.filter(car => car.id !== id));
//     };
//     const editCar = (id, updatedCar) => {
//         setCars(cars.map(car => (car.id === id ? updatedCar : car)));
//     };

//     return (
//         <CarListContext.Provider value={{ cars, addCar, deleteCar, editCar }}>
//             {children}
//         </CarListContext.Provider>
//     );
// };


import { useReducer, createContext, useEffect } from "react";

const INITIAL_STATE = {
   cars: [],
   filter: {brand: null, year: null, priceRange: null, volume: null},
   language: 'en'
};


const CAR_ACTION_TYPES = {
    carAdded: 'carAdded',
    carRemoved: 'carRemoved',
    carEdited: 'carEdited',
    filterChanged: 'filterChanged',
    languageChanged: 'languageChanged',
};



function carReducer(state, action) {
    const { type, payload } = action;
    const { cars } = state;
    switch (type) {
        case CAR_ACTION_TYPES.carAdded: {
            const newState = {
                ...state,
                cars: [
                    ...cars,
                    { id: Date.now(), ...payload }
                ]
            };
            saveIntoLocalStorage(newState);
            return newState;
        }
        case CAR_ACTION_TYPES.carRemoved: {
            const newState = {
                ...state,
                cars: cars.filter(car => car.id !== payload)
            };
            saveIntoLocalStorage(newState);
            return newState;
        }
        case CAR_ACTION_TYPES.carEdited: {
            const newState = {
                ...state,
                cars: cars.map(car => (car.id === payload.id ? { ...car, ...payload.data } : car))
            };
            saveIntoLocalStorage(newState);
            return newState;
        }
        case CAR_ACTION_TYPES.filterChanged: {
            const newState = {
                ...state,
                filter: payload
            };
            saveIntoLocalStorage(newState);
            return newState;
        }
        case CAR_ACTION_TYPES.languageChanged: {
            const newState = {
                ...state,
                language: payload
            };
            saveIntoLocalStorage(newState);
            return newState;
        }
        default:
            return state;
    }
}


const init = () => {
    const stored = localStorage.getItem('carsState');
    if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.cars)) {
            return {
                cars: parsed.cars || [],
                filter: parsed.filter || {brand: null, year: null, priceRange: null, volume: null},
                language: parsed.language || 'en'
            };
        }
        return parsed;
    }
    return INITIAL_STATE;
};


const saveIntoLocalStorage = (state) => {
    localStorage.setItem('carsState', JSON.stringify(state));
};

export const CarsContext = createContext({
    cars: [],
    filter: {brand: null, year: null, priceRange: null, volume: null, color: null},
    language: 'en',
    addCar: () => {},
    removeCar: () => {},
    editCar: () => {},
    changeFilter: () => {},
    changeLanguage: () => {},
});

export const CarsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer, INITIAL_STATE, init);

    useEffect(() => {
        localStorage.setItem('carsState', JSON.stringify(state));
    }, [state]);

    const addCar = (car) => dispatch({ type: CAR_ACTION_TYPES.carAdded, payload: car });
    const removeCar = (id) => dispatch({ type: CAR_ACTION_TYPES.carRemoved, payload: id });
    const editCar = (id, data) => dispatch({ type: CAR_ACTION_TYPES.carEdited, payload: { id, data } });
    const changeFilter = (filter) => dispatch({ type: CAR_ACTION_TYPES.filterChanged, payload: filter });
    const changeLanguage = (language) => dispatch({ type: CAR_ACTION_TYPES.languageChanged, payload: language });


    const value = {
        cars: state.cars,
        filter: state.filter,
        language: state.language,
        addCar,
        removeCar,
        editCar,
        changeFilter,
        changeLanguage,
    };

    return (
        <CarsContext.Provider value={value}>
            {children}
        </CarsContext.Provider>
    );
};