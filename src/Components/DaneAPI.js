import React, { useEffect, useState } from 'react';

const DaneAPI = () => {

    const [dane,ustawDane] = useState({});
    const [pobieranie,ustawPobieranie] = useState(false);

    useEffect(() => {
        ustawPobieranie(true);
        setTimeout(() => {
            fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data =>{
                ustawDane(data);
                console.log(data);
                ustawPobieranie(false);
            })
        },5000);
    },[])

    
    return(
    <div className="api">
        {pobieranie ? <h3>Trwa pobieranie danych</h3> : <section>
            <h3>Pobrano informacje o {dane.name}</h3>
            <p>Rok urodzenia: {dane.birth_year}</p>
            <p>Płeć: {dane.gender === "male" ? "mężczyzna" : "kobieta"}</p>
            <p>Wzrost: {dane.height}cm</p> 
        </section>}
    </div>)
}

export default DaneAPI;


