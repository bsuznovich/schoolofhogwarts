import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Ravenclaw.scss'

class Ravenclaw extends Component{
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

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div className='ravenBG'>
                {
                    id ? (
                        <div className='pageBG'>
                            <a href='http://localhost:4321/api/signout'>
                                <button>Sign Out</button>
                            </a>
                            <h1 className='ravenclaw'>Ravenclaw</h1>
                            <div className='navholder'>
                                <nav className='navraven'>
                                    <p className='homelink'>
                                        <Link to='/welcome'> Home </Link>
                                    </p>
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
                            <div className='studenthousepoints'>
                                    <Link to='/ravenclaw/students'><button className='studentbtnraven'>Students</button></Link>
                                <p className='housepoints'>
                                    House Points: 
                                </p>
                            </div>
                            <div className='ravenbody'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                    Congratulations! I’m Prefect Robert Hilliard, and I’m delighted to welcome you to RAVENCLAW HOUSE. Our emblem is the eagle, which soars where others cannot climb; our house colours are blue and bronze, and our common room is found at the top of Ravenclaw Tower, behind a door with an enchanted knocker. The arched windows set into the walls of our circular common room look down at the school grounds: the lake, the Forbidden Forest, the Quidditch pitch and the Herbology gardens. No other house in the school has such stunning views.
                                </p>
                                <p className='raventext'>
                                    Without wishing to boast, this is the house where the cleverest witches and wizards live. Our founder, Rowena Ravenclaw, prized learning above all else – and so do we. Unlike the other houses, who all have concealed entrances to their common rooms, we don’t need one. The door to our common room lies at the top of a tall, winding staircase. It has no handle, but an enchanted bronze knocker in the shape of an eagle. When you rap on the door, this knocker will ask you a question, and if you can answer it correctly, you are allowed in. This simple barrier has kept out everyone but Ravenclaws for nearly a thousand years.
                                </p>
                                <p className='raventext'>
                                    Some first-years are scared by having to answer the eagle’s questions, but don’t worry. Ravenclaws learn quickly, and you’ll soon enjoy the challenges the door sets. It’s not unusual to find twenty people standing outside the common room door, all trying to work out the answer to the day’s question together. This is a great way to meet fellow Ravenclaws from other years, and to learn from them – although it is a bit annoying if you’ve forgotten your Quidditch robes and need to get in and out in a hurry. In fact, I’d advise you to triple-check your bag for everything you need before leaving Ravenclaw Tower.
                                </p>
                                <p className='raventext'>
                                    Another cool thing about Ravenclaw is that our people are the most individual – some might even call them eccentrics. But geniuses are often out of step with ordinary folk, and unlike some other houses we could mention, we think you’ve got the right to wear what you like, believe what you want, and say what you feel. We aren’t put off by people who march to a different tune; on the contrary, we value them!
                                </p>
                                <p className='raventext'>
                                    Speaking of eccentrics, you’ll like our Head of house, Professor Filius Flitwick. People often underestimate him, because he’s really tiny (we think he’s part elf, but we’ve never been rude enough to ask) and he’s got a squeaky voice, but he’s the best and most knowledgeable Charms master alive in the world today. His office door is always open to any Ravenclaw with a problem, and if you’re in a real state he’ll get out these delicious little cupcakes he keeps in a tin in his desk drawer and make them do a little dance for you. In fact, it’s worth pretending you’re in a real state just to see them jive.
                                </p>
                                <p className='raventext'>
                                    Ravenclaw house has an illustrious history. Most of the greatest wizarding inventors and innovators were in our house, including Perpetua Fancourt, the inventor of the lunascope, Laverne de Montmorency, a great pioneer of love potions, and Ignatia Wildsmith, the inventor of Floo powder. Famous Ravenclaw Ministers for Magic include Millicent Bagnold, who was in power on the night that Harry Potter survived the Dark Lord’s curse, and defended the wizarding celebrations all over Britain with the words, ‘I assert our inalienable right to party'. There was also Minister Lorcan McLaird, who was a quite brilliant wizard, but preferred to communicate by puffing smoke out of the end of his wand. Well, I did say we produce eccentrics. In fact, we are also the house that gave the wizarding world Uric the Oddball, who used a jellyfish for a hat. He’s the punch line of a lot of wizarding jokes.
                                </p>
                                <p className='raventext'>
                                    As for our relationship with the other three houses: well, you’ve probably heard about the Slytherins. They’re not all bad, but you’d do well to be on your guard until you know them well. They’ve got a long house tradition of doing whatever it takes to win – so watch out, especially in Quidditch matches and exams.
                                </p>
                                <p className='raventext'>
                                    The Gryffindors are OK. If I had a criticism, I’d say Gryffindors tend to be show-offs. They’re also much less tolerant than we are of people who are different; in fact, they’ve been known to make jokes about Ravenclaws who have developed an interest in levitation, or the possible magical uses of troll bogies, or ovomancy, which (as you probably know) is a method of divination using eggs. Gryffindors haven’t got our intellectual curiosity, whereas we’ve got no problem if you want to spend your days and nights cracking eggs in a corner of the common room and writing down your predictions according to the way the yolks fall. In fact, you’ll probably find a few people to help you.
                                </p>
                                <p className='raventext'>
                                    As for the Hufflepuffs, well, nobody could say they’re not nice people. In fact, they’re some of the nicest people in the school. Let’s just say you needn’t worry too much about them when it comes to competition at exam time.
                                </p>
                                <p className='raventext'>
                                    I think that’s nearly everything. Oh yes, our house ghost is the Grey Lady. The rest of the school thinks she never speaks, but she’ll talk to Ravenclaws. She’s particularly useful if you’re lost, or you’ve mislaid something.
                                </p>
                                <p className='raventext'>
                                    I’m sure you’ll have a good night. Our dormitories are in turrets off the main tower; our four-poster beds are covered in sky blue silk eiderdowns and the sound of the wind whistling around the windows is very relaxing.
                                </p>
                                <p className='raventext'>
                                    And once again: well done on becoming a member of the cleverest, quirkiest and most interesting house at Hogwarts.
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

export default connect(mapState, {getUserData})(Ravenclaw)