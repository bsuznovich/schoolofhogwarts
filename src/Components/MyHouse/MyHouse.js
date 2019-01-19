import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'

class MyHouse extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    async componentDidMount(){
        console.log(this.props.user)
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
        let page
        if(id && this.props.user.houseid === '1'){
            page = <div>
                        <h1>my house</h1>
                        <h2>Gryffindor</h2>
                    </div>
        } else if(id && this.props.user.houseid === '2'){
            page = <div>
                <h1>my house</h1>
                <h2>Hufflepuff</h2>
            </div>
        } else if(id && this.props.user.houseid === '3'){
            page = <div>
                <h1>my house</h1>
                <h2>Ravenclaw</h2>
            </div>
        } else if(id && this.props.user.houseid === '4'){
            page = <div>
                <h1>my house</h1>
                <h2>Slytherin</h2>
            </div>
        } else if(id && !this.props.user.houseid){
            page = <div>
                <h1>You do not have a house yet</h1>
            </div>
        } else if(!id){
            page = <div>
                <h1>Please sign in</h1>
            </div>
        }
        return(
            <div>
                <a href='http://localhost:4321/api/signout'>
                             <button>Sign Out</button>
                        </a>
                        <br/>
                        <Link to='/welcome'> Home </Link>
                        <Link to='/houses'> Houses </Link>
                            Students
                        <Link to='/myprofile'> My Profile </Link>
                {page}
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(MyHouse)