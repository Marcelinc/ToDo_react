import React from 'react';

const Formularz = (props) => {
    return(
        <form className="formularz" onSubmit={props.onSubmit}>
                <input type="text" name="imie" value={props.dane.imie} placeholder="Imie" onChange={props.onChange}/>
                    <br/>
                    <input type="text" name="nazwisko" value={props.dane.nazwisko} placeholder="Nazwisko" onChange={props.onChange}/>
                    <br/>
                    <input type="number" name="wiek" value={props.dane.wiek} placeholder="wiek" onChange={props.onChange}/>
                    <br/>
                    <h1>Płeć:</h1>
                    <label>
                        Mężczyzna
                        <input type="radio" name="plec" value="mezczyzna" checked={props.dane.plec==="mezczyzna"} onChange={props.onChange}/>
                    </label>
                    <label>
                        Kobieta
                        <input type="radio" name="plec" value="kobieta" checked={props.dane.plec==="kobieta"} onChange={props.onChange}/>
                    </label>
                    <br/>
                    <h1>Kraj</h1>
                    <select name="kraj" value={props.dane.kraj} onChange={props.onChange}>
                        <option value="Polska">Polska</option>
                        <option value="Francja">Francja</option>
                    </select>
                    <h1>Język programowania</h1>
                    <label>
                        JavaScript
                        <input type="checkbox" name="javascript" checked={props.dane.jezyk.javascript} onChange={props.onChange} />
                    </label>
                    <label>
                        TypeScript
                        <input type="checkbox" name="typescript" checked={props.dane.jezyk.typescript} onChange={props.onChange} />
                    </label>
                    <br/>
                    <button type="submit">Prześlij</button>
                </form>    
    )
}
export default Formularz;

