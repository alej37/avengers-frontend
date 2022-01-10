import React, {Component} from 'react';
import axios from 'axios';



class AvengerShow extends Component {
    constructor(){
        super()
        this.state = {
            avenger: {
                superhero_name:"",
                real_name: "",
                description: "",
                status: false,
                age: 30,

            }
        }
    }
    componentDidMount() {
        let AVENGERS_API_WITH_ID = `http://localhost:3000/api/v1/avengers/${this.props.match.params.id}`;
        axios.get(AVENGERS_API_WITH_ID)
            .then( response => {
                this.setState({avenger: response.data});
            })
            .catch( error => {
                console.log(error);
            })
    }
    
    render() {
        
        const { superhero_name, real_name, age, description, status} = this.state.avenger;
        return (
            <div>
                <h1>{superhero_name}</h1>
                <h2>{real_name} </h2>
                <div className='description'>
                    <p>{description}</p>
                </div>
                <p>{status}</p>
                <p>{age}</p>
            </div>

        )

    }
}

export default AvengerShow;