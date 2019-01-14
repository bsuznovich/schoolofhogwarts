import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn'
import Enroll from './Components/Enroll/Enroll'
import Houses from './Components/Houses/Houses'
import MyHouse from './Components/MyHouse/MyHouse'
import MyProfile from './Components/MyProfile/MyProfile'
import Nav from './Components/Nav/Nav'
import Welcome from './Components/Welcome/Welcome'
import Homepage from './Components/Homepage/Homepage'
import Gryffindor from './Components/Gryffindor/Gryffindor'
import GryffindorStudents from './Components/GryffindorStudents/GryffindorStudents'
import Hufflepuff from './Components/Hufflepuff/Hufflepuff'
import HufflepuffStudents from './Components/HufflepuffStudents/HufflepuffStudents'
import Ravenclaw from './Components/Ravenclaw/Ravenclaw'
import RavenclawStudnets from './Components/RavenclawStudents/RavenclawStudents'
import Slytherin from './Components/Slytherin/Slytherin'
import SlytherinStudents from './Components/SlytherinStudents/SlytherinStudents'
import './App.css';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <Link to='/signin' >Sign In</Link>
        <Link to='/enroll' >Enroll</Link>
        {/* <SignIn /> */}
        {/* <Enroll /> */}
        {/* <Homepage /> */}
        {/* <Welcome />
        <Houses />
        <MyHouse />
        <MyProfile />
        <Gryffindor />
        <GryffindorStudents />
        <Hufflepuff />
        <HufflepuffStudents />
        <Ravenclaw />
        <RavenclawStudnets />
        <Slytherin />
        <SlytherinStudents /> */}
        {routes}
      </div>
    );
  }
}

export default App;
