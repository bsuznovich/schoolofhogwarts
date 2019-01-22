import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Gryffindor.scss'

class Gryffindor extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: []
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
        this.getHousePoints(1)
    }

    getHousePoints = (id) => {
        axios.get(`/api/housepoints/${id}`).then(res => {
            console.log(res.data)
            this.setState({
                points: res.data[0].points
            })
        })
    }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div className='GryffBG'>
                {
                    id ? (
                        <div className='pageBG'>
                            <a href='http://localhost:4321/api/signout'>
                                <button>Sign Out</button>
                            </a>
                            <h1 className='gryffindor'>Gryffindor</h1>
                            <div className='navholder'>
                                <nav className='navgryffin'>
                                    <p className='homelink'>
                                        <Link to='/welcome'> Home </Link>
                                    </p>
                                    <p className='houseslink'>
                                        <Link to='/houses'> Houses </Link>
                                    </p>
                                    <p className='myhouselink'>
                                        <Link to='/myhouse/:houseid'> My House </Link>
                                    </p>
                                    <p className='profilelink'>
                                        <Link to='/myprofile'> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepoints'>
                                    <Link to='/gryffindor/students'><button className='studentbtngryffin'>Students</button></Link>
                                <p className='housepointsgryffin'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='ravenbody'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                Congratulations! I’m Prefect Percy Weasley, and I’m delighted to welcome you to GRYFFINDOR HOUSE. Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower.
                                </p>
                                <p className='raventext'>
                                This is, quite simply, the best house at Hogwarts. It’s where the bravest and boldest end up – for instance: Albus Dumbledore! Yes, Dumbledore himself, the greatest wizard of our time, was a Gryffindor! If that’s not enough for you, I don’t know what is.
                                </p>
                                <p className='raventext'>
                                I won’t keep you long, as all you need to do to find out more about your house is to follow Harry Potter and his friends as I lead them up to their dormitories. Enjoy your time at Hogwarts – but how could you fail to? You’ve become part of the best house in the school.
                                </p>
                            </div>
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Gryffindor)