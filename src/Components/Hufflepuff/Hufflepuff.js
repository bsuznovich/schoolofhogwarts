import React, {Component} from 'react'

export default class Hufflepuff extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                Hufflepuff
            </div>
        )
    }
}