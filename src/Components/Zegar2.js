import React, { useEffect, useState } from 'react';

const ZegarHook = () => {

    const [data,ustawDate] = useState(new Date().toLocaleTimeString());
    const czasomierz = setInterval(() => ustawDate(new Date().toLocaleTimeString()),1000);

    useEffect(() => {
       clearInterval(czasomierz);
    },[czasomierz])

    return(
        <p>{data}</p>
    )
}

export default ZegarHook;

