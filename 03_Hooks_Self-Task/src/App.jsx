import './App.css'
import ButtonTimer from './components/buttonTimer'
import Timer from './components/timer'
import TimerWithHistory from './components/timerWithHistory'

function App() {
    return (
      <div>
        <ButtonTimer />
        <hr />
        <Timer />
        <hr />
        <TimerWithHistory />
      
      </div>
  )
}

export default App
