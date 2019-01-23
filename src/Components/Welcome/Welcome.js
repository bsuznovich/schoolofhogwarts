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
          console.log(res)
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
    
    async sort(){
        let gryffindor = 1
        let hufflepuff = 2
        let ravenclaw = 3
        let slytherin = 4
        if(this.houseid){
            Swal({
                title: 'Sorry',
                text: "You have already been assigned to a house",
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: '#740001',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Okay'
              }).then((result) => {
                  console.log(result)
                if (result.value) {
                    this.props.history.push('/welcome')
                }
              })
        } else {
            let num = Math.floor((Math.random() * 4) + 1)
            if(num === gryffindor){
                let res = await axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
                this.props.getUserData(res.data)
                Swal({
                    title: 'Gryffindor',
                    text: "Congratulations! You have been assigned to Gryffindor!",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#740001',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Go to page'
                }).then((result) => {
                    console.log(result)
                    if (result.value) {
                        this.props.history.push('/myhouse/1')
                    }
                })
            } else if (num === hufflepuff){
                let res = await axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
                this.props.getUserData(res.data)
                Swal({
                    title: 'Hufflepuff',
                    text: "Congratulations! You have been assigned to Hufflepuff!",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#ecb939',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Go to page'
                }).then((result) => {
                    console.log(result)
                    if (result.value) {
                        this.props.history.push('/myhouse/2')
                    }
                })
            } else if (num === ravenclaw){
                let res = await axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
                this.props.getUserData(res.data)                
                Swal({
                    title: 'Ravenclaw',
                    text: "Congratulations! You have been assigned to Ravenclaw!",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#5d5d5d',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Go to page'
                }).then((result) => {
                    console.log(result)
                    if (result.value) {
                        this.props.history.push('/myhouse/3')
                    }
                })
            } else if (num === slytherin){
                let res = await axios.post(`/api/sort`, {email: this.props.user.email, houseid: num})
                this.props.getUserData(res.data)                
                Swal({
                    title: 'Slytherin',
                    text: "Congratulations! You have been assigned to Slytherin!",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#5d5d5d',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Go to page'
                }).then((result) => {
                    console.log(result)
                    if (result.value) {
                        this.props.history.push('/myhouse/4')
                    }
                })
            }
        }
    }
    

    render(){
        console.log(this.props)
        const {id} = this.props.user
        let welcomepage
        if(id && this.props.user.houseid){
            welcomepage = <div className='pageBG'>
            <div className='header'>
            <a href='http://localhost:4321/api/signout'>
                <button className='signout'>Sign Out</button>
            </a>
            <h1 className='welcome'>Welcome to Hogwarts school of 
            <br/>
            Witchcraft and Wizardry</h1>
            </div>
            <div className='navholder'>
                <nav>
                    <p>
                        <Link className='homelink' to='/houses' style={{ textDecoration: 'none', color: '#ecb939' }}> Houses </Link>
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
            <div className='body'>
            <br/>
            <br/>
                <p className='raventext'>
                    Congratulations and welcome to Hogwarts! We are pleased to have you join our amazing school! Here you will learn how to mix potions, cast charms, learn how to defend yourself against the dark arts, and much more. 
                </p>
                <p className='raventext'>
                    Before you can go to class and participate in all the fun things we have going on around the castle, you must first join the Sorting Ceremony. 
                </p>
                <p className='raventext'>
                    The famous Hogwarts Sorting Hat gives an account of its own genesis in a series of songs sung at the beginning of each school year. Legend has it that the hat once belonged to one of the four founders, Godric Gryffindor, and that it was jointly enchanted by all four founders to ensure that students would be sorted into their eponymous houses, which would be selected according to each founder’s particular preferences in students.
                </p>
                <p className='raventext'>
                    The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood. It can even respond to the thoughts of the wearer.
                </p>
                <p className='raventext'>
                    The Sorting Hat is notorious for refusing to admit it has made a mistake in its sorting of a student. On those occasions when Slytherins behave altruistically or selflessly, when Ravenclaws flunk all their exams, when Hufflepuffs prove lazy yet academically gifted and when Gryffindors exhibit cowardice, the Hat steadfastly backs its original decision. On balance, however, the Hat has made remarkably few errors of judgement over the many centuries it has been at work.
                </p>
            </div>
        </div>
        } else if (id && !this.props.user.houseid){
            welcomepage = <div className='pageBG'>
                            <div className='header'>
                            <a href='http://localhost:4321/api/signout'>
                                <button className='signout'>Sign Out</button>
                            </a>
                            <h1 className='welcome'>Welcome to Hogwarts school of 
                            <br/>
                            Witchcraft and Wizardry</h1>
                            </div>
                            <div className='navholder'>
                                <nav>
                                    <p>
                                        <Link className='homelink' to='/houses' style={{ textDecoration: 'none', color: '#ecb939' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#ecb939' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#ecb939' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <button className='joinbtn' onClick={() => this.sort()}>Join the Sorting Ceremony</button>
                            <div className='body'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                    Congratulations and welcome to Hogwarts! We are pleased to have you join our amazing school! Here you will learn how to mix potions, cast charms, learn how to defend yourself against the dark arts, and much more. 
                                </p>
                                <p className='raventext'>
                                    Before you can go to class and participate in all the fun things we have going on around the castle, you must first join the Sorting Ceremony. 
                                </p>
                                <p className='raventext'>
                                    The famous Hogwarts Sorting Hat gives an account of its own genesis in a series of songs sung at the beginning of each school year. Legend has it that the hat once belonged to one of the four founders, Godric Gryffindor, and that it was jointly enchanted by all four founders to ensure that students would be sorted into their eponymous houses, which would be selected according to each founder’s particular preferences in students.
                                </p>
                                <p className='raventext'>
                                    The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood. It can even respond to the thoughts of the wearer.
                                </p>
                                <p className='raventext'>
                                    The Sorting Hat is notorious for refusing to admit it has made a mistake in its sorting of a student. On those occasions when Slytherins behave altruistically or selflessly, when Ravenclaws flunk all their exams, when Hufflepuffs prove lazy yet academically gifted and when Gryffindors exhibit cowardice, the Hat steadfastly backs its original decision. On balance, however, the Hat has made remarkably few errors of judgement over the many centuries it has been at work.
                                </p>
                            </div>
                        </div>
        } else if (!id){
            welcomepage = <h1>Please sign in</h1>
        }
        return(
            <div className='welcomebody'>
            {welcomepage}
                {/* { 
                    id ? (
                        <div className='pageBG'>
                            <div className='header'>
                            <a href='http://localhost:4321/api/signout'>
                                <button className='signout'>Sign Out</button>
                            </a>
                            <h1 className='welcome'>Welcome to Hogwarts school of 
                            <br/>
                            witchcraft and wizardry</h1>
                            </div>
                            <div className='navholder'>
                                <nav>
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
                            <button className='joinbtn' onClick={() => this.sort()}>Join the Sorting Ceremony</button>
                            <div className='body'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                    Congratulations and welcome to Hogwarts! We are pleased to have you join our amazing school! Here you will learn how to mix potions, cast charms, learn how to defend yourself against the dark arts, and much more. 
                                </p>
                                <p className='raventext'>
                                    Before you can go to class and participate in all the fun things we have going on around the castle, you must first join the Sorting Ceremony. 
                                </p>
                                <p className='raventext'>
                                    The famous Hogwarts Sorting Hat gives an account of its own genesis in a series of songs sung at the beginning of each school year. Legend has it that the hat once belonged to one of the four founders, Godric Gryffindor, and that it was jointly enchanted by all four founders to ensure that students would be sorted into their eponymous houses, which would be selected according to each founder’s particular preferences in students.
                                </p>
                                <p className='raventext'>
                                    The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood. It can even respond to the thoughts of the wearer.
                                </p>
                                <p className='raventext'>
                                    The Sorting Hat is notorious for refusing to admit it has made a mistake in its sorting of a student. On those occasions when Slytherins behave altruistically or selflessly, when Ravenclaws flunk all their exams, when Hufflepuffs prove lazy yet academically gifted and when Gryffindors exhibit cowardice, the Hat steadfastly backs its original decision. On balance, however, the Hat has made remarkably few errors of judgement over the many centuries it has been at work.
                                </p>
                            </div>
                        </div>
                    ) : <h1>Please sign in</h1> */}
                {/* } */}
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Welcome)