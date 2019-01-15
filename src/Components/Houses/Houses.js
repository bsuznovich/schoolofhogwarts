import React from 'react'
import {Link} from 'react-router-dom'

export default function Houses() {
    return(
        <div>
            <Link to='/ravenclaw'> Ravenclaw </Link>
            <Link to='/gryffindor'> Gryffindor </Link>
            <Link to='/hufflepuff'> Hufflepuff </Link>
            <Link to='/slytherin'> Slytherin </Link>
            <br/>
            Houses
        </div>
    )
}