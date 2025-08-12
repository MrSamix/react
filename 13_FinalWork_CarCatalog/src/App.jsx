import './App.css'
import CarForm from './components/CarForm/CarForm'
import CarCard from './components/CarCard/CarCard'
import CarList from './components/CarList/CarList'
import AddCarBtn from './components/AddCarBtn/AddCarBtn'
import Filter from './components/Filter/Filter'

function App() {
  return (
    <>
      {/* <CarForm /> */}
      <Filter />
      <AddCarBtn />
      <CarList />
      {/* <CarCard model="Tesla Model S" year={2020} price={79999} volume={100} /> */}
    </>
  )
}

export default App
