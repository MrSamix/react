import { useState } from "react";
import Counter from "./counter";

function Timer(){
    const [value, setValue] = useState(0);

    const showValue=()=>{
        setValue(value + 1)
    }


    const addTenValue=()=>{
        setValue(value + 10)
    }

    const removeOneHundredValue=()=>{
        setValue(value - 100)
    }

    const addTwentyFiveValue=()=>{
        setValue(value + 25)
    }

    return(
        <>
            <button onClick={showValue}>+1</button>
            <button onClick={addTenValue}>+10</button>
            <button onClick={removeOneHundredValue}>-100</button>
            <button onClick={addTwentyFiveValue}>+25</button>
            <Counter value={value} />
        </>
    )
}
export default Timer;