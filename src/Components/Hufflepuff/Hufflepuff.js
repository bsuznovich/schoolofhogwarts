import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'

class Hufflepuff extends Component{
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
        } Swal({
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

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div>
                {
                    id ? (
                        <div>
                        <Link to='/'>Sign Out</Link>
                        <br/>
                        <Link to='/welcome'> Home </Link>
                        <Link to='/houses'> Houses </Link>
                        <Link to='/myhouse/:houseid'> My House </Link>
                        <Link to='/myprofile'> My Profile </Link>
                        <br/>
                        <Link to='/hufflepuff/students'>Students</Link>
                        <br/>
                        Hufflepuff
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Hufflepuff)