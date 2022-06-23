import { useState } from "react";

interface Pet {
    name: string;
    type: string;
    id: number;
}

let petArray = [
    
]






export default function ArraysEx(){
    let colorArray = ["red", "orange", "yellow"]
    const [colors, setColors] = useState(colorArray);
    const [pets, setPets] = useState<Pet[]>([])
    function addColor(color:string): void {
        let newArray = colors.slice(0);
        newArray.push(color);
        setColors(newArray);
    }
    return(
        <div>
            <ol>{colors.map((color, index) => <li key={index}>
                {color}
            </li>)}</ol>
            <button onClick = {() => addColor ("green")}>Green</button>
            <button onClick = {() => addColor ("blue")}>Blue</button>
            <button onClick = {() => addColor ("purple")}>Purple</button>
            
            </div>
    )

};