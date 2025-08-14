import './App.css'
import CarList from './components/CarList/CarList'
import AddCarBtn from './components/AddCarBtn/AddCarBtn'
import Filter from './components/Filter/Filter'
import LanguageSelect from './components/LanguageSelect/LanguageSelect'

function App() {
  return (
    <>
      <LanguageSelect />
      <Filter />
      <AddCarBtn />
      <CarList />
    </>
  )
}

export default App
