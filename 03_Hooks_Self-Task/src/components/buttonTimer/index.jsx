import { useState } from "react";

function ButtonTimer(){

    const [value, setValue] = useState(0);

    let addValue=()=>{
        setValue(value + 1)
    }
    return(
        <button onClick={addValue}>{value}</button>
    )
}

export default ButtonTimer;