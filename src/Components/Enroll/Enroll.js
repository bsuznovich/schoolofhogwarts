import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Enroll extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }

    async enroll() {
        const {email, password, firstName, lastName} = this.state
        const res = await axios.post(`/api/enroll`, {email: email, password: password, firstname: firstName, lastname: lastName})
        if(res.data.signedIn){
            this.props.history.push('/welcome')
        }
    }

    render(){
        return(
            <div>
                <p>Enroll</p>
                <div>
                    <span>Email: </span>
                    <input onChange={(e) => this.setState({email: e.target.value})} />
                    <span>Password: </span>
                    <input onChange={(e) => this.setState({password: e.target.value})} />
                    <span>First Name: </span>
                    <input onChange={(e) => this.setState({firstName: e.target.value})} />
                    <span>Last Name: </span>
                    <input onChange={(e) => this.setState({lastName: e.target.value})} />
                </div>
                <p>
                    <button onClick={() => this.enroll()}>Enroll</button>
                    <button onClick={() => this.props.history.push('/')}>Cancel</button>
                </p>
            </div>
        )
    }
}