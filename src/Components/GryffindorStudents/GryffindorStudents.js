import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Student from '../Students/Students'

export default class GryffindorStudents extends Component{
    constructor(props){
        super(props)
        this.state = {
            students: [],
            quidditch: []
        }
    }

    componentDidMount(){
        this.getStudents(1)
    }

    getStudents = (houseId) => {
        axios.get(`/api/students/${houseId}`).then(res => {
            this.setState({
                students: res.data
              })
        })
        
      }

    render(){
        let studentList = this.state.students.map(student => {
            return(
                <div>
                    <Student key={student.id}
                    id={student.id}
                    firstname={student.firstname}
                    lastname={student.lastname}
                    year={student.year}
                    houseid={student.houseid}
                    points={student.points}
                    getStudents={() => this.getStudents(student.houseid)}/>
                </div>
            )
        })
        return(
            <div>
                <Link to='/'>Sign Out</Link>
                <br/>
                <Link to='/welcome'> Home </Link>
                <Link to='/myhouse/:houseid'> My House </Link>
                <Link to='/myprofile'> My Profile </Link>
                <br/>
                Gryffindor Students
                {studentList}
            </div>
        )
    }
}