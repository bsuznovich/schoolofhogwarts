import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import MyData from '../MyData/MyData'

class MyProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
            myInfo: []
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

        this.showInfo(this.props.user.id)
    }

    showInfo = (id) => {
        axios.get(`/api/student/${id}`).then(res => {
            this.setState({
                myInfo: res.data
              })
        })
      }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        let myList = this.state.myInfo.map(my => {
            return(
                <div>
                        <MyData key={my.id}
                        firstname={my.firstname}
                        lastname={my.lastname}
                        year={my.year}
                        houseid={my.houseid}
                        points={my.points}
                        picture={my.picture}
                        showInfo={() => this.showInfo(my.id)}/>
                </div>
            )
        })
        return(
            <div>
                {
                    id ? (
                        <div>
                            <a href='http://localhost:4321/api/signout'>
                                <button>Sign Out</button>
                            </a>
                            <br/>
                            <Link to='/welcome'> Home </Link>
                            <Link to='/myhouse/:houseid'> My House </Link>
                            <br/>
                            My Profile
                            {myList}
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(MyProfile)