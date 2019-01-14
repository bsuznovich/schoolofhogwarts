import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Houses from './src/Components/Houses/Houses'
import MyProfile from './src/Components/MyProfile/MyProfile'
import Welcome from './src/Components/Welcome/Welcome'
import Homepage from './src//Components/Homepage/Homepage'
import Gryffindor from './src/Components/Gryffindor/Gryffindor'
import GryffindorStudents from './src/Components/GryffindorStudents/GryffindorStudents'
import Ravenclaw from './src/Components/Ravenclaw/Ravenclaw'
import RavenclawStudents from './src/Components/RavenclawStudents/RavenclawStudents'
import Hufflepuff from './src/Components/Hufflepuff/Hufflepuff'
import HufflepuffStudents from './src/Components/HufflepuffStudents/HufflepuffStudents'
import Slytherin from './src/Components/Slytherin/Slytherin'
import SlytherinStudents from './src/Components/SlytherinStudents/SlytherinStudents'

export default(
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/gryffindor' component={Gryffindor} />
        <Route path='/gryffindor/students' component={GryffindorStudents} />
        <Route path='/slytherin' component={Slytherin} />
        <Route path='/slytherin/students' component={SlytherinStudents} />
        <Route path='/hufflepuff' component={Hufflepuff} />
        <Route path='/hufflepuff/students' component={HufflepuffStudents} />
        <Route path='/ravenclaw' component={Ravenclaw} />
        <Route path='/ravenclaw/students' component={RavenclawStudents} />
        <Route path='/houses' component={Houses} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='/welcome' component={Welcome} />
    </Switch>
)