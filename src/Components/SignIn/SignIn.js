import React, {Component} from 'react'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                Sign In
            </div>
        )
    }
}