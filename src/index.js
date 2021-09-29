import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>

    <h1>Liste des clients </h1>
      <ul>
        <li>Toutsop Jordan <button>X</button></li>
        <li>Alongo Daniel <button>X</button></li>
        <li>William Wamba <button>X</button></li>
        <li>Epasso Jean <button>X</button></li>
      </ul>
      <form>
        <input type="text" placeholder="Ajouter client"/>
        <button>Confirmer</button>
      </form>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
