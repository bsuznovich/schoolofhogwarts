import React, { Component } from 'react';
import HousePage from './Components/HousePage/HousePage'
import Houses from './Components/Houses/Houses'
import MyHouse from './Components/MyHouse/MyHouse'
import MyProfile from './Components/MyProfile/MyProfile'
import Nav from './Components/Nav/Nav'
import Students from './Components/Students/Students'
import Welcome from './Components/Welcome/Welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HousePage />
        <Houses />
        <MyHouse />
        <MyProfile />
        <Nav />
        <Students />
        <Welcome />
      </div>
    );
  }
}

export default App;
