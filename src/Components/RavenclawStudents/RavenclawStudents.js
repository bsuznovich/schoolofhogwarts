import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Students from '../Students/Students'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './RavenclawStudents.scss'

class RavenclawStudents extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: [],
            students: [],
            quidditch: []
        }
    }

    async componentDidMount(){
            try {
              const res = await axios.get(`/api/user-data`)
              this.props.getUserData(res.data)
            } catch(err){
              console.log('Error: Not signed in' , err)
            } 
            if(!this.props.user.id){
                Swal({
                title: 'Unauthorized',
                text: "Log in to see page",
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: '#740001',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go back'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/')
                }
              })
            }
        this.getHousePoints(3)
        this.getStudents(3)
    }

    getHousePoints = (id) => {
        axios.get(`/api/housepoints/${id}`).then(res => {
            console.log(res.data)
            this.setState({
                points: res.data[0].points
            })
        })
    }

    getStudents = (houseId) => {
        axios.get(`/api/students/${houseId}`).then(res => {
            this.setState({
                students: res.data
              })
        })
        
      }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        let studentList = this.state.students.map(student => {
            return(
                <div>
                    <Students key={student.id}
                    id={student.id}
                    firstname={student.firstname}
                    lastname={student.lastname}
                    year={student.year}
                    houseid={student.houseid}
                    points={student.studentpoints}
                    picture={student.studentpicture}
                    getStudents={() => this.getStudents(student.houseid)}/>
                </div>
            )
        })
        return(
            <div className='RCBG'>
                {
                    id ? (
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='ravensignout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='ravenclaw'>Ravenclaw</h1>
                            <div className='navholder'>
                                <nav className='navraven'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#0e1a40' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#0e1a40' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#0e1a40' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#0e1a40' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepointsgryffin'>
                                <p className='housepoints'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='studentravenBG'>
                                <br/>
                                <br/>
                                <h2 className='positionlabel'>Head of House</h2>
                            <div className='hoh'>
                                    <img className='hohimg' src='https://i.pinimg.com/originals/a7/7a/ca/a77aca66b90807d42d890aec6f8f78c8.jpg' alt='' />
                                    <p className='hohtext' >Name: Filius Flitwick</p>
                                </div>
                                <br/>
                                <h2 className='positionlabel'>Prefect</h2>
                                <div className='student'>
                                    <img className='prefectimg' src='https://vignette.wikia.nocookie.net/harrypotter/images/e/ef/Padma_patil.PNG/revision/latest?cb=20090723090430' alt=''/>
                                    <p className='prefecttext'>Name: Padma Patil</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 15</p>
                                </div>
                                <div className='student'>
                                    <img className='prefectimg' src='https://cdn6.newsnation.in/images/2014/12/17/364877937-Anthony-Rowling_6.jpg' alt=''/>
                                    <p className='prefecttext'>Name: Anthony Goldstein</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 20</p>
                                </div>
                                <br/>
                                <br/>
                                <h2 className='positionlabel'>Students</h2>
                                {studentList}
                            </div>
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(RavenclawStudents)