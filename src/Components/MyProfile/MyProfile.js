import React, {Component} from 'react'

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
                My Profile
            </div>
        )
    }
}