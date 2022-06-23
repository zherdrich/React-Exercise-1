import "./diameter.css"
import { useState } from "react"
import Greeting from "./Greeting";

export default function Diameter(){
    const [diameter, setDiameter] = useState(25);
    const [isChecked, setIsChecked] = useState(false);
    const styles = {
        width: diameter + "px",
        height: diameter + "px",
        background: "red",
    }
    
    function Gatorade(){
        console.log("string");
    }
    let myName = "Amber";
    let myColor = "blue";

    return (
        <div className="Shape">
            <h1>Hi</h1>
            <Greeting myName={myName} myColor={myColor}/>
        
        <form>
            
            
            
            
            
            
            <input type="number" value={diameter} name="Diameter" id="Diameter" onChange={(e) => setDiameter(e.target.valueAsNumber)}/>

            <label htmlFor="Diameter">Diameter</label>
            <input type="checkbox" name="" id="isCircle" checked={isChecked} onClick= {() => {setIsChecked(!isChecked)}}/>
            <label htmlFor="isCircle">Is Circle?</label>
        </form>
        <div className={isChecked? "Circle": "Square"} style={styles}></div>
        <p>{diameter}</p>
        {false || <p>Hi</p>}
        <button onClick={Gatorade}>Button</button>
        </div>
        
    )  
}   