import React from 'react'
import {Link} from 'react-router-dom'
import routes from '../../routes'

export default function Nav() {
    return(
        <div>
            <Link to='/welcome' >Home</Link>
            <Link to='/houses' >Houses</Link>
            <Link to='/myprofile' >My profile</Link>
        {routes}
        </div>
    )
}