import { useState } from "react";
import HistoryItem from "../HistoryItem";
import Counter from "../timer/counter";

function TimerWithHistory(){
    const [value, setValue] = useState(0);
    const [history, setHistory] = useState([]);

    const showValue=()=>{
        setValue(value + 1)
        setHistory(prevHistory => [...prevHistory, "+1"]);
    }


    const addTenValue=()=>{
        setValue(value + 10)
        setHistory(prevHistory => [...prevHistory, "+10"]);
    }

    const removeOneHundredValue=()=>{
        if (value - 100 < 0) {
            alert("Value can't be less than 0")
            return
        }
        setValue(value - 100)
        setHistory(prevHistory => [...prevHistory, "-100"]);
    }

    const addTwentyFiveValue=()=>{
        setValue(value + 25)
        setHistory(prevHistory => [...prevHistory, "+25"]);
    }
    console.log(history);
    return(
        <>
            <button onClick={showValue}>+1</button>
            <button onClick={addTenValue}>+10</button>
            <button onClick={removeOneHundredValue}>-100</button>
            <button onClick={addTwentyFiveValue}>+25</button>
            <Counter value={value} />
            <h3>History:</h3>
            <ul style={{textAlign: "left"}}>
                {history.map(h => <HistoryItem value={h} />)}
            </ul>
        </>
    )
}
export default TimerWithHistory;