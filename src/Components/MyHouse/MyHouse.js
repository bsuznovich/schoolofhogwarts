import React, {Component} from 'react'

export default class MyHouse extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                My House
            </div>
        )
    }
}