import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Students from '../Students/Students'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './SlytherinStudents.scss'

class SlytherinStudents extends Component{
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
        this.getHousePoints(4)
        this.getStudents(4)
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
            <div className='SSBG'>
                {
                    id ? (
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='slythersignout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='slytherin'>Slytherin</h1>
                            <div className='navholder'>
                                <nav className='navslyther'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#1a472a' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#1a472a' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#1a472a' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#1a472a' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepointsgryffin'>
                                <p className='housepointsslyther'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='studentslytherBG'>
                                <br/>
                                <br/>
                                <h2 className='positionlabel'>Head of House</h2>
                            <div className='hoh'>
                                    <img className='hohimg' src='https://vignette.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest?cb=20150307193047' alt='' />
                                    <p className='hohtext' >Name: Severus Snape</p>
                                </div>
                                <br/>
                                <h2 className='positionlabel'>Prefects</h2>
                                <div className='student'>
                                    <img className='prefectimg' src='http://coolspotters.com/files/photos/687984/pansy-parkinson-gallery.png' alt=''/>
                                    <p className='prefecttext'>Name: Pansy Parkinson</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 30</p>
                                </div>
                                <div className='student'>
                                    <img className='prefectimg' src='https://i.pinimg.com/originals/34/09/a1/3409a1b3d6a6cdd07d02b6a8594bf309.jpg' alt=''/>
                                    <p className='prefecttext'>Name: Draco Malfoy</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 25</p>
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

export default connect(mapState, {getUserData})(SlytherinStudents)