import React, {Component} from 'react'

export default class Students extends Component{
    constructor(props){
        super(props)
        this.state = {
            students: [],
            quidditch: []
        }
    }

    render(){
        return(
            <div>
                Students
            </div>
        )
    }
}