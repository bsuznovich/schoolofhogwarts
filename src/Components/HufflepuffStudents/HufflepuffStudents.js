import React, {Component} from 'react'

export default class HufflepuffStudents extends Component{
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
                Hufflepuff Students
            </div>
        )
    }
}