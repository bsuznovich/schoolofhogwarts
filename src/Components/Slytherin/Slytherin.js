import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Slytherin extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                <Link to='/'>Sign Out</Link>
                <br/>
                <Link to='/welcome'> Home </Link>
                <Link to='/myhouse/:houseid'> My House </Link>
                <Link to='/myprofile'> My Profile </Link>
                <br/>
                <Link to='/slytherin/students'>Students</Link>
                <br/>
                Slytherin
            </div>
        )
    }
}