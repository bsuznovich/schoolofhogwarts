import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            firstName: '',
            lastName: ''
        }
    }

    render(){
        return(
            <div>
                <Link to='/signin'> Sign In </Link>
                <Link to='/enroll'> Enroll </Link>
                <br/>
                Homepage
            </div>
        )
    }
}