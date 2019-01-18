import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Homepage.scss'

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
            <div className='homebody'>
                <div className='homepageBG'>
                {/* <img src='homepage_background4.jpg' alt=''/> */}
                    <Link to='/signin'> Sign In </Link>
                    <Link to='/enroll'> Enroll </Link>
                    <br/>
                    Homepage
                </div>
            </div>
        )
    }
}