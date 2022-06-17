import React from 'react';

const DaneZFormularza = (props) => {
   return(
    <div>
    ______________________________________________
        <h1>Wprowadzone dane:</h1>
        Imie: {props.dane.imie}
        <br/>
        Nazwisko: {props.dane.nazwisko}
        <br/>
        Wiek: {props.dane.wiek}
        <br/>
        Płeć: {props.dane.plec}
        <br/>
        Kraj: {props.dane.kraj}
        <br/>
        Języki: {props.dane.jezyk.javascript && "JavaScript"} {props.dane.jezyk.typescript && ",TypeScript"}
    </div>
   )
}

export default DaneZFormularza;

