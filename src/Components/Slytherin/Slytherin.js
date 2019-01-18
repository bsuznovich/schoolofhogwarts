import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Slytherin.scss'

class Slytherin extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go back'
          }).then((result) => {
              console.log(result)
            if (result.value) {
                this.props.history.push('/')
            }
          })
        }
    }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div className='slytherinBG'>
                {
                    id ? (
                        <div>
                            <a href='http://localhost:4321/api/signout'>
                                <button>Sign Out</button>
                            </a>
                            <br/>
                            <Link to='/welcome'> Home </Link>
                            <Link to='/houses'> Houses </Link>
                            <Link to='/myhouse/:houseid'> My House </Link>
                            <Link to='/myprofile'> My Profile </Link>
                            <br/>
                            <Link to='/slytherin/students'>Students</Link>
                            <br/>
                            Slytherin
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Slytherin)