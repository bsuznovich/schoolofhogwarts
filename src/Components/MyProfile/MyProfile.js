import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'

class MyProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
            picture: '',
            firstName: '',
            lastName: '',
            house: '',
            year: ''
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
                        <Link to='/myhouse/:houseid'> My House </Link>
                        <br/>
                        My Profile
                        <br/>
                        <img src='http://cdn.shopify.com/s/files/1/3006/5420/products/handsomesquidward_2_1200x1200.png?v=1523576748' alt='' />
                        <div>
                            <p>First Name: </p>
                            <p>Last Name: </p>
                            <p>House: </p>
                            <p>Year: </p>
                        </div>
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(MyProfile)