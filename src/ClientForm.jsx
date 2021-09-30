import React, {Component} from 'react';

class ClientForm extends Component {
    state = {
        nouveauClient: ''
    }

  HandleAdd = (event) => {
    this.setState({nouveauClient: event.currentTarget.value});
  }


  HandleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onHandleAdd(id, nom);
    this.setState({nouveauClient: ''});
  }

    render() {

       return  <form onSubmit = {this.HandleSubmit}>
          <input 
            type="text" 
            value={this.state.nouveauClient} 
            onChange={this.HandleAdd} 
            placeholder="Ajouter un client"/>
          <button>Confirmer</button>
        </form>
    }
}

export default ClientForm;