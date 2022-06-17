import React, { useState } from 'react';
import DaneZFormularza from './DaneZFormularza';
import Formularz from './Formularz';

const PojemnikFormularza = () => {

    const formOnChange = (event) => {
        const {type,name,value,checked} = event.target;
        console.log(event.target);

        if(type === "checkbox"){
            if(name==="javascript") ustawJezyk({...jezyk,javascript:checked});
            else if(name==="typescript") ustawJezyk({...jezyk,typescript:checked});
        }
        else{
            if(name === "imie") ustawImie(value);
            else if(name === "nazwisko") ustawNazwisko(value);
            else if(name === "wiek") ustawWiek(value);
            else if(name === "kraj") ustawKraj(value);
            else if(name === "plec") ustawPlec(value);
        }
      }
      
      const formSubmit = (e) => {
        e.preventDefault();
      }
      
      const [imie,ustawImie] = useState('');
      const [nazwisko,ustawNazwisko] = useState('');
      const [wiek,ustawWiek] = useState(18);
      const [plec,ustawPlec] = useState('');
      const [jezyk,ustawJezyk] = useState({javascript:false,typescript:false});
      const [kraj,ustawKraj] = useState('Polska');

      return(<main className="formularz">
        <Formularz onSubmit={formSubmit} onChange={formOnChange} dane={{imie,nazwisko,wiek,plec,jezyk,kraj}}/>
        <DaneZFormularza dane={{imie,nazwisko,wiek,plec,jezyk,kraj}}/>
        </main>)
}

export default PojemnikFormularza;

