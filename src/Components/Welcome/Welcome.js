import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class HousePage extends Component{

    render(){
        return(
            <div>
                <Link to='/'> Sign Out </Link>
                <br/>
                <Link to='/houses'> Houses </Link>
                <Link to='/myhouse/:houseid'> My House </Link>
                <Link to='/myprofile'> My Profile </Link>
                Welcome
            </div>
        )
    }
}