import React, {Component} from 'react'

export default class Enroll extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }

    render(){
        return(
            <div>
                <p>
                Enroll
                </p>
            </div>
        )
    }
}