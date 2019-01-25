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
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='signout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='gryffindor'>Gryffindor</h1>
                            <div className='navholder'>
                                <nav className='navgryffin'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#740001' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#740001' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#740001' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#740001' }}> My Profile </Link>
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
                                    {this.props.user.houseid === 1 ? 'Congratulations! I’m Prefect Hermione Granger, and I’m delighted to welcome you to GRYFFINDOR HOUSE. Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower.'
                                    : 'I’m Prefect Hermione Granger. Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower.'}
                                 </p>
                                <p className='raventext'>
                                This is, quite simply, the best house at Hogwarts. It’s where the bravest and boldest end up – for instance: Albus Dumbledore! Yes, Dumbledore himself, the greatest wizard of our time, was a Gryffindor! If that’s not enough for you, I don’t know what is.
                                </p>
                                <p className='raventext'>
                                I won’t keep you long. Enjoy your time at Hogwarts – but how could you fail to? You’ve become part of the best house in the school.
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