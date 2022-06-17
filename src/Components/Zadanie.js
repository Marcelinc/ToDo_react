import React, { useState } from "react"

const styleCompleted={
    color: "#9ce014",
    textDecoration: "line-through red"
}
const styleUncompleted={
    color:"green",
    boxShadow: "0 5px 15px #ccdbad"
}

function Zadanie(props){

    const [status,ustawStatus] = useState(props.wykonane);
    const onChangeHandler = (event) => {
        ustawStatus(event.target.checked);
    }

    return(
        <div className="zadanie">
            <input type="checkbox" checked={status} onChange={onChangeHandler}></input>
            <p style={status ? styleCompleted : styleUncompleted}>{props.doZrobienia}</p>
        </div>
    )
}

export default Zadanie;



