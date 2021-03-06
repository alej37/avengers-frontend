import React, {Component} from 'react';
import axios from 'axios';
import Avenger from './Avenger';
import { Link } from 'react-router-dom';



const AVENGERS_API = "http://localhost:3000/api/v1/avengers"



class AvengersIndex extends Component {
    constructor() {
        super()
        this.state = {
            avengersArray: []
        }
    }
    
    componentDidMount() {
        axios.get(AVENGERS_API)
            .then( response => {
                console.log(response)
                this.setState({avengersArray: response.data});
            })
            .catch( error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className='avenger-card'>
                {this.state.avengersArray.map( avenger => 
                    <Avenger 
                        id={avenger.id}
                        key={avenger.id}
                        superhero_name = {<Link to={`avenger/${avenger.id}`}>{avenger.superhero_name}</Link>}
                        real_name = {avenger.real_name}
                        description = {avenger.description}
                        status = {avenger.status}
                        age = {avenger.age}
                    >
                        
                    </Avenger>
                    
                    )}
            </div>
        )
    }

}





export default AvengersIndex;