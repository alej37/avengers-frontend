import React, {Component} from 'react';
import './Avenger.css';





class Avenger extends Component {
    render() {
        const { superhero_name, real_name, age, description, status} = this.props;
        return (
            <div>
                <h1>{superhero_name}</h1>
                <h2>{real_name} </h2>
                <div className='description'>
                    <p>{description}</p>
                </div>
                <p>{status ?  "Alive" : "Deseased"}</p>
                <p>{age}</p>
            </div>

        )

    }
}

export default Avenger;