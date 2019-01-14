import React, {Component} from 'react'

export default class SlytherinStudents extends Component{
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
                Slytherin Students
            </div>
        )
    }
}