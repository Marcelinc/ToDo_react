import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Uzytkownik = () => {

    const {loginWithRedirect,logout,user,isLoading,isAuthenticated} = useAuth0();
        
    if(isLoading)
        return(<main>Ładowanie danych</main>);

    if(!isAuthenticated)
       return(<main><div>
            <h3>Nie jesteś zalogowany</h3> 
            <p className='log-link' onClick={() => loginWithRedirect({
                logged:true})}>Zaloguj się</p>
            <p className='log-link' onClick={() => loginWithRedirect({screen_hint: "signup"})}>Zarejestruj się</p>
        </div></main>)

    const {nickname,picture} = user;

    return(<main>
        {user && !isLoading && <div><h2>Panel użytkownika</h2>
            <p>Witaj {nickname} </p>
            <div><img src={picture} alt='zdjecie'></img></div>
            <button onClick={() => logout()}>Wyloguj się</button>
        </div>}
    </main>)
}

export default Uzytkownik;

