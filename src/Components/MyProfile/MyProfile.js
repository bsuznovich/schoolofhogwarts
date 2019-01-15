import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class MyProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
            picture: '',
            firstName: '',
            lastName: '',
            house: '',
            year: ''
        }
    }

    render(){
        return(
            <div>
                <Link to='/'>Sign Out</Link>
                <br/>
                <Link to='/welcome'> Home </Link>
                <Link to='/myhouse/:houseid'> My House </Link>
                <br/>
                My Profile
            </div>
        )
    }
}