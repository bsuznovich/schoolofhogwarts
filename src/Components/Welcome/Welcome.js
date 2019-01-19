import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Welcome.scss'

class Welcome extends Component{

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
    
    async sort(){
        let num = Math.floor((Math.random() * 4) + 1)
        let gryffindor = 1
        let hufflepuff = 2
        let ravenclaw = 3
        let slytherin = 4
        if(num === gryffindor){
            axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
            Swal({
                title: 'Gryffindor',
                text: "Congratulations! You have been assigned to Gryffindor!",
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to page'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/myhouse/:houseid')
                }
              })
        } else if (num === hufflepuff){
            axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
            Swal({
                title: 'Hufflepuff',
                text: "Congratulations! You have been assigned to Hufflepuff!",
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to page'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/myhouse/:houseid')
                }
              })
        } else if (num === ravenclaw){
            axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
            Swal({
                title: 'Ravenclaw',
                text: "Congratulations! You have been assigned to Ravenclaw!",
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to page'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/myhouse/:houseid')
                }
              })
        } else if (num === slytherin){
            axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
            Swal({
                title: 'Slytherin',
                text: "Congratulations! You have been assigned to Slytherin!",
                type: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to page'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/myhouse/:houseid')
                }
              })
        }
    }
    

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div className='welcomebody'>
                { 
                    id ? (
                        <div>
                            <a href='http://localhost:4321/api/signout'>
                                <button>Sign Out</button>
                            </a>
                            <br/>
                            <Link to='/houses'> Houses </Link>
                            <Link to='/myhouse/:houseid'> My House </Link>
                            <Link to='/myprofile'> My Profile </Link>
                            <br/>
                            Welcome
                            <br/>
                            <button onClick={() => this.sort()}>Join the Sorting Ceremony</button>
                        </div>
                    ) : <p>Please sign in <Link to='/'>Homepage</Link></p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Welcome)