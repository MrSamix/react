import { useState } from "react";

const TestComponent = () => {
    const [isFirst, setIsFirst] = useState(true);

    return (
        <div>
            {
                isFirst ? <h1>First</h1> : <h1>Seconds</h1>
            }
            <button onClick={() => setIsFirst(!isFirst)}>Change</button>
        </div>
    )
}

export default TestComponent;