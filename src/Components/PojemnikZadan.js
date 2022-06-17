import React from 'react';
import Zadanie from './Zadanie';
import zadania from '../zbiorZadan';

const PojemnikZadan = () => {
    return(<main>
    {
        zadania.map((zadanie => {
            return(<Zadanie key={zadanie.id} wykonane={zadanie.wykonane} doZrobienia={zadanie.opis}/>)
        }))
    }
    </main>)

}

export default PojemnikZadan;