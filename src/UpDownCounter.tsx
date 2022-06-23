import "./UpDownCounter.css"

import { useState } from "react"

export default function UpDownCounter() {
    // const [count2, setCount2] = useState(5);
    
    const [count, setCount] = useState(0);
    return (
    <div className="UpDownCounter">



        <div>
            <button onClick={()=> {setCount(prv => prv+1)}}>Up</button>
            <h1>{count}</h1>
            <button onClick={()=> {setCount(prv => prv-1)}}>Down</button>
            {/* <h2>{count2}</h2> */}

    
        </div>

    </div>
        )
}