import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './main.css';
import PojemnikFormularza from './Components/PojemnikFormularza';
import DaneAPI from './Components/DaneAPI';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PojemnikZadan from './Components/PojemnikZadan';
import App from './App';
import Uzytkownik from './Components/Uzytkownik';
import Auth0ProviderWithHistory from './AuthProvider';


ReactDOM.render(
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Nav/>
        <Switch>
          <Route path='/' exact component={App}/>
          <Route path='/zadania' component={PojemnikZadan}/>
          <Route path='/formularz' component={PojemnikFormularza}/>
          <Route path='/pobieranie' component={DaneAPI}/>
          <Route path='/uzytkownik' component={Uzytkownik}/>
        </Switch>
        <Footer/>
      </Auth0ProviderWithHistory>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
