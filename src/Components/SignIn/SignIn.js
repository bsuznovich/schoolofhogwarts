import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    async signIn(){
        const {email, password} = this.state
        const res = await axios.post('/api/signin', {email: email, password: password})
        if(res.data.signedIn){
            this.props.history.push('/welcome')
        }
    }

    render(){
        return(
            <div>
                <p>Sign In</p>
                <div>
                    <span>Email: </span>
                    <input onChange={(e) => this.setState({email: e.target.value})}/>
                    <span>Password: </span>
                    <input onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <p>
                    <button onClick={() => this.signIn()}>Sign in</button>
                    <button onClick={() => this.props.history.push('/')}>Cancel</button>
                </p>
            </div>
        )
    }
}