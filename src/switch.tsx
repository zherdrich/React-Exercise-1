

import "./Switch.css"
import { useState } from "react";
export default function Switch(){
    const [isOn, setIsOn] = useState("On");
    return (
        <div className={isOn === "On"? "Switch On": "Switch"}>

            <h1>Switch</h1>
            <p>{isOn}</p>
            <div>
{ isOn === "Off"?   <button onClick={()=> {setIsOn("On")}}>Turn On</button>:
                <button onClick={()=> {setIsOn("Off")}}>Turn Off</button>
                }
            </div>

        </div>
    )
}