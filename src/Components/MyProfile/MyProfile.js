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
                <br/>
                <img src='http://cdn.shopify.com/s/files/1/3006/5420/products/handsomesquidward_2_1200x1200.png?v=1523576748' alt='' />
                <div>
                    <p>First Name: </p>
                    <p>Last Name: </p>
                    <p>House: </p>
                    <p>Year: </p>
                </div>
            </div>
        )
    }
}