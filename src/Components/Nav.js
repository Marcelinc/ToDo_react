import React from "react"
import { Link } from 'react-router-dom';

function Nav(){
    return(
    <nav>
        <div id="title">
            <h2><Link to='/'>React JS</Link></h2>
        </div>
        <ul className="nav-links">
            <li><Link to='/uzytkownik'>Użytkownik</Link></li>
            <li><Link to='/zadania'>Zadania</Link></li>
            <li><Link to='/formularz'>Formularz</Link></li>
            <li><Link to='/pobieranie'>Pobieranie</Link></li>
        </ul>
    </nav>)
}

export default Nav;

