import { ChangeEvent, useState } from "react"

export default function Form () {

    const [flavor, setFlavor] = useState("");

    const [active, setActive] = useState(false);

    function handleFlavorChange(e:React.ChangeEvent<HTMLInputElement>){
        setFlavor(e.target.value);
    }

    return (
        <div>

            <input id="Flavor" value ={flavor} onChange= {handleFlavorChange}/>

            <label htmlFor="Flavor">Flavor</label>
            <p>{flavor}</p>
            <input 
            type="checkbox" 
            id="checkbox" 
            checked= {active} 
            onChange={(e) => {
                setActive(e.target.checked);
                setFlavor("")
        }}
        />
            <label htmlFor="checkbox">Checkbox</label>
            {active === true ? <p>Why did you checked the checkbox?</p>: <p>Why dont you check the checkbox?</p> }
            

        </div>
    )
}