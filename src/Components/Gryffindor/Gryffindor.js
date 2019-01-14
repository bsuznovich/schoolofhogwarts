import React, {Component} from 'react'

export default class Gryffindor extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                Gryffindor
            </div>
        )
    }
}