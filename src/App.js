import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
