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
    }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        let page
        if(id && this.props.user.houseid === 1){
            this.props.history.push('/gryffindor')
        } else if(id && this.props.user.houseid === 2){
            this.props.history.push('/hufflepuff')
        } else if(id && this.props.user.houseid === 3){
            this.props.history.push('/ravenclaw')
        } else if(id && this.props.user.houseid === 4){
            this.props.history.push('/slytherin')
        } else if(id && !this.props.user.houseid){
            page = <div className='homepageBG'>
                            <div className='header'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='signout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='welcome'>Welcome to Hogwarts school of 
                            <br/>
                            Witchcraft and Wizardry</h1>
                            </div>
                            <div className='navholder'>
                                <nav>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#ecb939' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#ecb939' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#ecb939' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#ecb939' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            {/* <button className='joinbtn' onClick={() => this.sort()}>Join the Sorting Ceremony</button> */}
                            <div className='nohousebody'>
                            <br/>
                            <br/>
                                <p className='housetext'>
                                    Join the Sorting Ceremony to get a house
                                </p>
                                
                            </div>
                        </div>
        } else if(!id){
            page = <div>
                <h1>Please sign in</h1>
            </div>
        }
        return(
            <div className='welcomebody'>
                {page}
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(MyHouse)