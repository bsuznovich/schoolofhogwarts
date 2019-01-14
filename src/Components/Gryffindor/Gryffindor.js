import React, {Component} from 'react'
import Nav from '../Nav/Nav'

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
                <Nav />
                Gryffindor
            </div>
        )
    }
}