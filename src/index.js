import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


class App extends React.Component {
  state = {
    clients: [
      {id: 1, nom: "Toutsop Jordan"},
      {id: 2, nom: "Yvan barrela"},
      {id: 3, nom: "Mauricio Hilton"},
      {id: 4, nom: "Armand Lamela"},
    ],
  };


  HandlerClick = () => {
    const client = this.state.clients.slice();
    client.push({id: 5, nom: "toto"});
    
    this.setState({clients: client});
  }

  HandleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);

    this.setState({clients: clients});
    console.log('le id supprimé es:' +id)
  };

  render() {
    const title = "Liste des client";
    return (
      <div>
        <h1>{title} </h1>
        <ul>
          {this.state.clients.map(client => (
            <li>{client.nom} <button onClick={() => this.HandleDelete(client.id)}>X</button> 
                              <button onClick={this.HandlerClick}>+</button></li>
              ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client"/>
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
