import React from 'react'
import {Link} from 'react-router-dom'

export default function Houses() {
    return(
        <div>
            <Link to='/'>Sign Out</Link>
            <br/>
            <Link to='/welcome'> Home </Link>
            <Link to='/myhouse/:houseid'> My House </Link>
            <Link to='/myprofile'> My Profile </Link>
            <br/>
            <Link to='/ravenclaw'> Ravenclaw </Link>
            <Link to='/gryffindor'> Gryffindor </Link>
            <Link to='/hufflepuff'> Hufflepuff </Link>
            <Link to='/slytherin'> Slytherin </Link>
            <br/>
            Houses
        </div>
    )
}