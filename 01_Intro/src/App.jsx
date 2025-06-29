import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavouriteFilm from './components/FavouriteFilm'
import InfoAboutMe from './components/InfoAboutMe'
import CurrentTime from './components/CurrentTime'
import HomeAnimal from './components/HomeAnimal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FavouriteFilm />
      <hr />
      <InfoAboutMe />
      <hr />
      <CurrentTime />
      <hr />
      <HomeAnimal />
    </>
  )
}

export default App
