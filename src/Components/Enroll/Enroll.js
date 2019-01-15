import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

    render(){
        return(
            <div>
                <p>
                    <Link to='/welcome'> Enroll </Link>
                    <Link to='/'> Cancel </Link>
                    <br/>
                    Enroll
                </p>
            </div>
        )
    }
}