import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { getUserData, updateUserInfo } from '../../ducks/reducer'
import MyData from '../MyData/MyData'
import MyOtherData from '../MyOtherData/MyOtherData'

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myInfo: {},
            editInput: '',
            editToggle: true
        }
    }

    async componentDidMount() {
        try {
            const res = await axios.get(`/api/user-data`)
            this.props.getUserData(res.data)
        } catch (err) {
            console.log('Error: Not signed in', err)
        }
        if (!this.props.user.id) {
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

    toggleEdit = () => {
        this.setState({
            editToggle: false
        })
    }

    save = () => {
        const {firstname, lastname, year, studentpoints} = this.props.user
        const updateUser = {firstname, lastname, year, studentpoints};
        axios.put('/api/userinfo', {updateUser}).then(res => {
            this.setState({
                myInfo: res.data,
                editToggle: true
            })
        })
    }

    render() {
        console.log(this.props)
        const { id } = this.props.user
        const { myInfo: my } = this.state
        return (
            <div>
                <div>
                    <a href='http://localhost:4321/api/signout'>
                        <button>Sign Out</button>
                    </a>
                    <br />
                    <Link to='/welcome'> Home </Link>
                    <Link to='/myhouse/:houseid'> My House </Link>
                    <br />
                    My Profile
                    <div>
                        <img src={this.props.user.studentpicture} alt='' />
                        { this.state.editToggle ? <button onClick={this.toggleEdit}>Edit</button> 
                        :
                        <button onClick={() => this.save()}>save</button>}
                        {this.state.editToggle ?
                            (
                                <>
                                    <p>Name: {this.props.user.firstname} {this.props.user.lastname}</p>
                                    <p>House: {this.props.user.housename}</p>
                                    <p>Year: {this.props.user.year}</p>
                                    <p>Points: {this.props.user.studentpoints}</p>
                                </>
                            )
                            : (
                                <>
                                    <input value={this.props.user.firstname} name='firstname' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <input value={this.props.user.lastname} name='lastname' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <input value={this.props.user.year} name='year' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <input value={this.props.user.studentpoints} name='studentpoints' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                </>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { getUserData, updateUserInfo })(MyProfile)