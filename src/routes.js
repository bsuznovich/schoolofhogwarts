import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Houses from './Components/Houses/Houses'
import MyProfile from './Components/MyProfile/MyProfile'
import Welcome from './Components/Welcome/Welcome'
import Homepage from './Components/Homepage/Homepage'
import Gryffindor from './Components/Gryffindor/Gryffindor'
import GryffindorStudents from './Components/GryffindorStudents/GryffindorStudents'
import Ravenclaw from './Components/Ravenclaw/Ravenclaw'
import RavenclawStudents from './Components/RavenclawStudents/RavenclawStudents'
import Hufflepuff from './Components/Hufflepuff/Hufflepuff'
import HufflepuffStudents from './Components/HufflepuffStudents/HufflepuffStudents'
import Slytherin from './Components/Slytherin/Slytherin'
import SlytherinStudents from './Components/SlytherinStudents/SlytherinStudents'
import Enroll from './Components/Enroll/Enroll'
import SignIn from './Components/SignIn/SignIn'
import MyHouse from './Components/MyHouse/MyHouse'

export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/enroll' component={Enroll} />
        <Route path='/signin' component={SignIn} />
        <Route exact path='/gryffindor' component={Gryffindor} />
        <Route path='/gryffindor/students' component={GryffindorStudents} />
        <Route exact path='/slytherin' component={Slytherin} />
        <Route path='/slytherin/students' component={SlytherinStudents} />
        <Route exact path='/hufflepuff' component={Hufflepuff} />
        <Route path='/hufflepuff/students' component={HufflepuffStudents} />
        <Route exact path='/ravenclaw' component={Ravenclaw} />
        <Route path='/ravenclaw/students' component={RavenclawStudents} />
        <Route path='/houses' component={Houses} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/myhouse/:houseid' component={MyHouse} />
    </Switch>
)