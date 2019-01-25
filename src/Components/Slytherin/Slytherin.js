import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Slytherin.scss'

class Slytherin extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
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
        this.getHousePoints(4)
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
            <div className='slytherinBG'>
                {
                    id ? (
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='slythersignout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='slytherin'>Slytherin</h1>
                            <div className='navholder'>
                                <nav className='navslyther'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#1a472a' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#1a472a' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#1a472a' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#1a472a' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepoints'>
                                    <Link to='/slytherin/students'><button className='studentbtnslyther'>Students</button></Link>
                                <p className='housepointsslyther'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='ravenbody'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                    {this.props.user.houseid === 4 ? 'Congratulations! I’m Prefect Pansy Parkinson, and I’m delighted to welcome you to SLYTHERIN HOUSE. Our emblem is the serpent, the wisest of creatures; our house colours are emerald green and silver, and our common room lies behind a concealed entrance down in the dungeons. As you’ll see, its windows look out into the depths of the Hogwarts lake. We often see the giant squid swooshing by – and sometimes more interesting creatures. We like to feel that our hangout has the aura of a mysterious, underwater shipwreck.'
                                    : 'I’m Prefect Pansy Parkinson. Our emblem is the serpent, the wisest of creatures; our house colours are emerald green and silver, and our common room lies behind a concealed entrance down in the dungeons. As you’ll see, its windows look out into the depths of the Hogwarts lake. We often see the giant squid swooshing by – and sometimes more interesting creatures. We like to feel that our hangout has the aura of a mysterious, underwater shipwreck.'}
                                </p>
                                <p className='raventext'>
                                    Now, there are a few things you should know about Slytherin – and a few you should forget.
                                </p>
                                <p className='raventext'>
                                    Firstly, let’s dispel a few myths. You might have heard rumours about Slytherin house – that we’re all into the Dark Arts, and will only talk to you if your great-grandfather was a famous wizard, and rubbish like that. Well, you don’t want to believe everything you hear from competing houses. I’m not denying that we’ve produced our share of Dark wizards, but so have the other three houses – they just don’t like admitting it. And yes, we have traditionally tended to take students who come from long lines of witches and wizards, but nowadays you’ll find plenty of people in Slytherin house who have at least one Muggle parent.
                                </p>
                                <p className='raventext'>
                                    Here’s a little-known fact that the other three houses don’t bring up much: Merlin was a Slytherin. Yes, Merlin himself, the most famous wizard in history! He learned all he knew in this very house! Do you want to follow in the footsteps of Merlin? Or would you rather sit at the old desk of that illustrious ex-Hufflepuff, Eglantine Puffett, inventor of the Self-Soaping Dishcloth?
                                </p>
                                <p className='raventext'>
                                    I didn’t think so.
                                </p>
                                <p className='raventext'>
                                    But that’s enough about what we’re not. Let’s talk about what we are, which is the coolest and edgiest house in this school. We play to win, because we care about the honour and traditions of Slytherin.
                                </p>
                                <p className='raventext'>
                                    We also get respect from our fellow students. Yes, some of that respect might be tinged with fear, because of our Dark reputation, but you know what? It can be fun, having a reputation for walking on the wild side. Chuck out a few hints that you’ve got access to a whole library of curses, and see whether anyone feels like nicking your pencil case.
                                </p>
                                <p className='raventext'>
                                    But we’re not bad people. We’re like our emblem, the snake: sleek, powerful, and frequently misunderstood.
                                </p>
                                <p className='raventext'>
                                    For instance, we Slytherins look after our own – which is more than you can say for Ravenclaw. Apart from being the biggest bunch of swots you ever met, Ravenclaws are famous for clambering over each other to get good marks, whereas we Slytherins are brothers. The corridors of Hogwarts can throw up surprises for the unwary, and you’ll be glad you’ve got the Serpents on your side as you move around the school. As far as we’re concerned, once you’ve become a snake, you’re one of ours – one of the elite.
                                </p>
                                <p className='raventext'>
                                    Because you know what Salazar Slytherin looked for in his chosen students? The seeds of greatness. You’ve been chosen by this house because you’ve got the potential to be great, in the true sense of the word. All right, you might see a couple of people hanging around the common room whom you might not think are destined for anything special. Well, keep that to yourself. If the Sorting Hat put them in here, there’s something great about them, and don’t you forget it.
                                </p>
                                <p className='raventext'>
                                    And talking of people who aren’t destined for greatness, I haven’t mentioned the Gryffindors. Now, a lot of people say that Slytherins and Gryffindors represent two sides of the same coin. Personally, I think Gryffindors are nothing more than wannabe Slytherins. Mind you, some people say that Salazar Slytherin and Godric Gryffindor prized the same kinds of students, so perhaps we are more similar than we like to think. But that doesn’t mean that we cosy up with Gryffindors. They like beating us only slightly less than we like beating them.
                                </p>
                                <p className='raventext'>
                                    A few more things you might need to know: our house ghost is the Bloody Baron. If you get on the right side of him he’ll sometimes agree to frighten people for you. Just don’t ask him how he got bloodstained; he doesn’t like it.
                                </p>
                                <p className='raventext'>
                                    The password to the common room changes every fortnight. Keep an eye on the noticeboard. Never bring anyone from another house into our common room or tell them our password. No outsider has entered it for more than seven centuries.
                                </p>
                                <p className='raventext'>
                                    Well, I think that’s all for now. I’m sure you’ll like our dormitories. We sleep in ancient four-posters with green silk hangings, and bedspreads embroidered with silver thread. Medieval tapestries depicting the adventures of famous Slytherins cover the walls, and silver lanterns hang from the ceilings. You’ll sleep well; it’s very soothing, listening to the lake water lapping against the windows at night.
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

export default connect(mapState, {getUserData})(Slytherin)