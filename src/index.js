import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Client from './Client';


class App extends React.Component {

  state = {
    clients: [
      {id: 1, nom: "Toutsop Jordan"},
      {id: 2, nom: "Yvan barrela"},
      {id: 3, nom: "Mauricio Hilton"},
      {id: 4, nom: "Armand Lamela"},
    ],
    nouveauClient: ''
  };


  HandlerClick = () => {
    const client = this.state.clients.slice();
    client.push({id: 5, nom: "toto"});
    
    this.setState({clients: client});
  }

  HandleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const clients = [...this.state.clients];
    clients.push({ id,nom});

    this.setState({clients, nouveauClient: ''});
    console.log('l\' heure es :' +id);
  }

  HandleAdd = (event) => {
    this.setState({nouveauClient: event.currentTarget.value});
  }

  HandleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);

    this.setState({clients});
    console.log('le id supprimé es:' +id)
  };

  render() {
    const title = "Liste des client";
    return (
      <div>
        <h1>{title} </h1>
        <ul>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.HandleDelete} onAdd={this.HandlerClick}/>
              ))}
        </ul>
        <form onSubmit = {this.HandleSubmit}>
          <input type="text" value={this.state.nouveauClient} onChange={this.HandleAdd} placeholder="Ajouter un client"/>
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
