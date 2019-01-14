import React, {Component} from 'react'

export default class Ravenclaw extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                Ravenclaw
            </div>
        )
    }
}