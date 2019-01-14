import React, {Component} from 'react'

export default class Slytherin extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                Slytherin
            </div>
        )
    }
}