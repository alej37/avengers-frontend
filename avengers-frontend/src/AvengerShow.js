import './AvengerShow.css'
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
        let AVENGERS_API_WITH_ID = `http://localhost:3000/api/v1/avengers/${this.props.match.params.avenger_id}`;
        axios.get(AVENGERS_API_WITH_ID)
            .then( response => {
                this.setState({avenger: response.data});
                console.log(this.state.avenger)
            })
            .catch( error => {
                console.log(error);
            })
    }
    
    render() {
        
        const { superhero_name, real_name, age, description, status} = this.state.avenger;
        return (
            <div className='AvengerShow-container'>
                <div className='AvengerShow-text'>
                    <h1 id="AvengerShow-title">{superhero_name}</h1>
                    <h2>Real Name: {real_name} </h2>
                    <div className='description'>
                        <p>Description: "{description}"</p>
                        <p>Status: {status ?  "Alive" : "Deseased"}</p>
                        <p>Age: {age}</p>
                    </div>

                </div>
            </div>

        )

    }
}

export default AvengerShow;