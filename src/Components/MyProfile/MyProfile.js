import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { getUserData, updateUserInfo } from '../../ducks/reducer'
import './Profile.scss'

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            housepoints: [],
            myInfo: {},
            editInput: '',
            editToggle: true,
            file: null
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
        this.getHousePoints(this.props.user.houseid)
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.user.studentpicture !== prevProps.user.studentpicture) {
    //       this.fetchData(this.props.user.studentpicture);
    //     } else if(this.props.user.studentpoints !== prevProps.user.studentpoints){
    //         this.fetchData(this.props.user.studentpoints)
    //     }
    //   }

    getHousePoints = async (id) => {
        let res = await axios.get(`/api/housepoints/${id}`)
            console.log(res.data)
            this.setState({
                housepoints: res.data[0].points
            })
        
    }

    toggleEdit = () => {
        this.setState({
            editToggle: false
        })
    }

    save = () => {
        const {firstname, lastname, year, studentpoints} = this.props.user
        axios.put('/api/userinfo', {firstname, lastname, year, studentpoints}).then(res => {
            this.setState({
                myInfo: res.data,
                editToggle: true
            })
            axios.post('/api/updatepoints').then(res => {
                this.setState({
                    myInfo:res.data
                })
            })
        })
        this.getHousePoints(this.props.user.houseid)
    }

    deleteProfile = (email) => {
        axios.delete(`/api/delete/${email}`).then(res => {
            this.setState({
                myInfo: res.data
            })
        })
    }

    submitFile = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.file[0])
        axios.post(`/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            axios.post('/api/picture', {studentpicture: response.data.Location})
        })
    }

    handleFileUpload = (event) => {
        this.setState({
            file: event.target.files
        })
    }

    render() {
        console.log(this.props)
        // const { id } = this.props.user
        // const { myInfo: my } = this.state
        let housepoints
        if(this.props.user.houseid === 1){
            housepoints = <div className='studenthousepointsgryffin'>
                <p className='housepointsgryffin'>
                    House Points: {this.state.housepoints}
                </p>
            </div>
        } else if(this.props.user.houseid === 2){
            housepoints = <div className='studenthousepointsgryffin'>
            <p className='housepointshuffle'>
                House Points: {this.state.housepoints}
            </p>
        </div>
        } else if(this.props.user.houseid === 3){
            housepoints = <div className='studenthousepointsgryffin'>
            <p className='housepoints'>
                House Points: {this.state.housepoints}
            </p>
        </div>
        } else if(this.props.user.houseid === 4){
            housepoints = <div className='studenthousepointsgryffin'>
            <p className='housepointsslyther'>
                House Points: {this.state.housepoints}
            </p>
        </div>
        }
        return (
            <div className={this.props.user.houseid === 1 ? 'GDBG' 
                        : this.props.user.houseid === 2 ? 'HPBG'
                        : this.props.user.houseid === 3 ? "RCBG"
                        : this.props.user.houseid === 4 ? "SSBG"
                        : 'welcomebody'}>
                <div className='pageBG'>
                <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='signout'>Sign Out</button>
                                </a>
                            </div>
                    <h1 className='gryffindor'>My Profile</h1>
                    <div className='navholder'>
                        <nav className={this.props.user.houseid === 1 ? 'navgryffin'
                            : this.props.user.houseid === 2 ? 'navhuffle'
                            : this.props.user.houseid === 3 ? 'navraven'
                            : this.props.user.houseid === 4 ? 'navslyther'
                            : 'nav'
                        }>
                            <p>
                                <Link className='homelink' to='/welcome' style={ this.props.user.houseid === 1 ? { textDecoration: 'none', color: '#740001' }
                                    : this.props.user.houseid === 2 ? { textDecoration: 'none', color: '#726255' }
                                    : this.props.user.houseid === 3 ? { textDecoration: 'none', color: '#0e1a40' }
                                    : this.props.user.houseid === 4 ? { textDecoration: 'none', color: '#1a472a' }
                                    : { textDecoration: 'none', color: '#eeba30' }
                                    }> Home </Link>
                            </p>
                            <p>
                                <Link className='houseslink' to='/houses' style={ this.props.user.houseid === 1 ? { textDecoration: 'none', color: '#740001' }
                                    : this.props.user.houseid === 2 ? { textDecoration: 'none', color: '#726255' }
                                    : this.props.user.houseid === 3 ? { textDecoration: 'none', color: '#0e1a40' }
                                    : this.props.user.houseid === 4 ? { textDecoration: 'none', color: '#1a472a' }
                                    : { textDecoration: 'none', color: '#eeba30' }
                                    }> Houses </Link>
                            </p>
                            <p>
                                <Link className='myhouselink' to='/myhouse/:houseid' style={ this.props.user.houseid === 1 ? { textDecoration: 'none', color: '#740001' }
                                    : this.props.user.houseid === 2 ? { textDecoration: 'none', color: '#726255' }
                                    : this.props.user.houseid === 3 ? { textDecoration: 'none', color: '#0e1a40' }
                                    : this.props.user.houseid === 4 ? { textDecoration: 'none', color: '#1a472a' }
                                    : { textDecoration: 'none', color: '#eeba30' }
                                    }> My House </Link>
                            </p>
                            <p>
                            <Link className='profilelink' to='/myprofile' style={ this.props.user.houseid === 1 ? { textDecoration: 'none', color: '#740001' }
                                    : this.props.user.houseid === 2 ? { textDecoration: 'none', color: '#726255' }
                                    : this.props.user.houseid === 3 ? { textDecoration: 'none', color: '#0e1a40' }
                                    : this.props.user.houseid === 4 ? { textDecoration: 'none', color: '#1a472a' }
                                    : { textDecoration: 'none', color: '#eeba30' }
                                    }> My Profile </Link>
                            </p>
                        </nav>
                    </div>
                        {housepoints}
                    <div className={this.props.user.houseid === 1 ? 'studentgryffinBG' 
                        : this.props.user.houseid === 2 ? 'studenthuffleBG'
                        : this.props.user.houseid === 3 ? 'studentravenBG'
                        : this.props.user.houseid === 4 ? 'studentslytherBG'
                        : 'profilebody'
                        }>
                    <br/>
                    <br/>
                        <img src={this.props.user.studentpicture} alt='' className='profilepic'/>
                        <br/>
                        <form className='addpicture' onSubmit={this.submitFile}>
                            <input label='upload file' type='file' onChange={this.handleFileUpload} />
                            <button className='addpicture' type='submit'>Send</button>
                        </form>
                        <br/>
                        <br/>
                        { this.state.editToggle ? <button className='editsavebtn' onClick={this.toggleEdit}>Edit</button> 
                        :
                        <button className='editsavebtn' onClick={() => this.save()}>Save</button>}
                        {this.state.editToggle ?
                            (
                                <>
                                    <p className='profiletext'>Name: {this.props.user.firstname} {this.props.user.lastname}</p>
                                    <p className='profiletext'>House: {this.props.user.housename}</p>
                                    <p className='profiletext'>Year: {this.props.user.year}</p>
                                    <p className='profiletext'>Points: {this.props.user.studentpoints}</p>
                                </>
                            )
                            : (
                                <>
                                    <p className='profiletext'>First name: </p>
                                    <input className='inputs' value={this.props.user.firstname} name='firstname' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <p className='profiletext'>Last name: </p>
                                    <input className='inputs' value={this.props.user.lastname} name='lastname' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <p className='profiletext'>Year: </p>
                                    <input className='inputs' value={this.props.user.year} name='year' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                    <p className='profiletext'>Points: </p>
                                    <input className='pointinput' value={this.props.user.studentpoints} name='studentpoints' onChange={({target}) => this.props.updateUserInfo(target.value, target.name)}/>
                                </>
                            )}
                            <br/>
                            <Link to='/'>
                                <button className='deletebutton' onClick={() => this.deleteProfile()}>Delete profile</button>
                            </Link>
                            <br/>
                            <br/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { getUserData, updateUserInfo })(MyProfile)