import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class MyHouse extends Component{
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
                Students
                <Link to='/myprofile'> My Profile </Link>
                <br/>
                My House
            </div>
        )
    }
}