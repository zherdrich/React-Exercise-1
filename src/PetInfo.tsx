import { useState } from "react";


interface Pet {
    name: string;
    breed: string;
}



export default function PetInfo() {
    const [pet] = useState <Pet>( {name: "Willy", breed: "Killer Whale"});
    return (

        <p>My pet {pet.breed}'s name is {pet.name}.</p>


    )
}

