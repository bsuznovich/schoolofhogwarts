import React, {Component} from 'react'

export default class GryffindorStudents extends Component{
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
                Gryffindor Students
            </div>
        )
    }
}