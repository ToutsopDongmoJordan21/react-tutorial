import React, {Component} from 'react';

class Client extends Component {
    render() {
        return <li>
                {this.props.details.nom} <button onClick={() => this.props.onDelete(this.props.details.id)}>X</button> 
                          <button onClick={this.props.onAdd}>+</button></li>
    }
}

export default Client;