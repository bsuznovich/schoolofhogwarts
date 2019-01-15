import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class HufflepuffStudents extends Component{
    constructor(props){
        super(props)
        this.state = {
            students: [],
            quidditch: []
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
                Hufflepuff Students
            </div>
        )
    }
}