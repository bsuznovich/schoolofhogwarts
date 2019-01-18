import React, {Component} from 'react'
import axios from 'axios'
import './Enroll.scss'

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
            <div className='EBG'>
                <p>Enroll</p>
                <form method='POST' action='send'>
                    <span>Email: </span>
                    <input onChange={(e) => this.setState({email: e.target.value})} />
                    <span>Password: </span>
                    <input onChange={(e) => this.setState({password: e.target.value})} />
                    <span>First Name: </span>
                    <input onChange={(e) => this.setState({firstName: e.target.value})} />
                    <span>Last Name: </span>
                    <input onChange={(e) => this.setState({lastName: e.target.value})} />
                </form>
                <p>
                    <button type='submit' onClick={() => this.enroll()}>Enroll</button>
                    <button onClick={() => this.props.history.push('/')}>Cancel</button>
                </p>
            </div>
        )
    }
}