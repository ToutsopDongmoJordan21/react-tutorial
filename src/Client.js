/* import React, {Component} from 'react';

class Client extends Component {
    render() {
        // const details = this.props.details;
        // const onDelete = this.props.onDelete;
        // const onAdd = this.props.onAdd;

        const {details, onDelete, onAdd } = this.props;
        return <li>
                {details.nom} <button onClick={() => onDelete(details.id)}>X</button> 
                          <button onClick={onAdd}>+</button></li>
    }
}

export default Client;
 */
import React from 'react';

const Client = ({details, onDelete, onAdd}) => (
        // const details = this.props.details;
        // const onDelete = this.props.onDelete;
        // const onAdd = this.props.onAdd;
        <li>
            {details.nom} <button onClick={() => onDelete(details.id)}>X</button> 
            <button onClick={onAdd}>+</button>
        </li>);

export default Client;