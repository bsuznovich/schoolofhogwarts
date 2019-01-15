import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <Link to='/welcome'> Confirm </Link>
                <Link to='/'> Cancel </Link>
                <br/>
                Sign In
            </div>
        )
    }
}