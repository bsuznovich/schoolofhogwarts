import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Students from '../Students/Students'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './HufflepuffStudents.scss'

class HufflepuffStudents extends Component{
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
        this.getHousePoints(2)
        this.getStudents(2)
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
            <div
            className='HPBG'>
                {
                    id ? (
                        <div className='pageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='signout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='hufflepuff'>Hufflepuff</h1>
                            <div className='navholder'>
                                <nav className='navhuffle'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#726255' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#726255' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#726255' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#726255' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepointsgryffin'>
                                <p className='housepointshuffle'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='studenthuffleBG'>
                            <br/>
                            <br/>
                            <h2 className='positionlabel'>Head of House</h2>
                            <div className='hoh'>
                                    <img className='hohimg' src='https://cdn.playbuzz.com/cdn/d730727a-02ba-4666-9053-72cae629e882/abac35f7-43fd-4baf-86e7-bcc9955e070b.jpg' alt='' />
                                    <p className='hohtext' >Name: Pomona Sprout</p>
                                </div>
                                <br/>
                                <h2 className='positionlabel'>Prefect</h2>
                                <div className='student'>
                                    <img className='prefectimg' src='	https://vignette.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg/revision/latest?cb=20170731215859' alt=''/>
                                    <p className='prefecttext'>Name: Hannah Abbott</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 40</p>
                                </div>
                                <div className='student'>
                                    <img className='prefectimg' src='https://vignette.wikia.nocookie.net/harrypotter/images/d/de/Ernie_GOF.jpg/revision/latest?cb=20160720043852' alt=''/>
                                    <p className='prefecttext'>Name: Ernest Macmillan</p>
                                    <p className='prefecttext'>Year: 5</p>
                                    <p className='prefecttext'>Points: 30</p>
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

export default connect(mapState, {getUserData})(HufflepuffStudents)