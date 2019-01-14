import React, {Component} from 'react'

export default class RavenclawStudents extends Component{
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
                Ravenclaw Students
            </div>
        )
    }
}