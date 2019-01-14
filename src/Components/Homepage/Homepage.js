import React, {Component} from 'react'

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
}