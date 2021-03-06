import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Hufflepuff.scss'

class Hufflepuff extends Component{
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
        this.getHousePoints(2)
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
            <div className='HuffBG'>
                {
                    id ? (
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='hufflesignout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='hufflepuff'>Hufflepuff</h1>
                            <div className='navholder'>
                                <nav className='navhuffle'>
                                    <p>
                                        <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#726255' }}> Home </Link>
                                    </p>
                                    <p>
                                        <Link className='houseslink' to='/houses' style={{ textDecoration: 'none', color: '#726255' }}> Houses </Link>
                                    </p>
                                    <p>
                                        <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#726255' }}> My House </Link>
                                    </p>
                                    <p>
                                        <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#726255' }}> My Profile </Link>
                                    </p>
                                </nav>
                            </div>
                            <div className='studenthousepoints'>
                                <p>
                                    <Link to='/hufflepuff/students'><button className='studentbtnhuffle'>Students</button></Link>
                                </p>
                                <p className='housepointshuffle'>
                                    House Points: {this.state.points}
                                </p>
                            </div>
                            <div className='ravenbody'>
                            <br/>
                            <br/>
                                <p className='raventext'>
                                    {this.props.user.houseid === 2 ? 'Congratulations! I’m Prefect Gabriel Truman, and I’m delighted to welcome you to HUFFLEPUFF HOUSE. Our emblem is the badger, an animal that is often underestimated, because it lives quietly until attacked, but which, when provoked, can fight off animals much larger than itself, including wolves. Our house colours are yellow and black, and our common room lies one floor below the ground, on the same corridor as the kitchens.'
                                    : 'I’m Prefect Ernest Macmillan. Our emblem is the badger, an animal that is often underestimated, because it lives quietly until attacked, but which, when provoked, can fight off animals much larger than itself, including wolves. Our house colours are yellow and black, and our common room lies one floor below the ground, on the same corridor as the kitchens.'}
                                    {/* Congratulations! I’m Prefect Gabriel Truman, and I’m delighted to welcome you to HUFFLEPUFF HOUSE. Our emblem is the badger, an animal that is often underestimated, because it lives quietly until attacked, but which, when provoked, can fight off animals much larger than itself, including wolves. Our house colours are yellow and black, and our common room lies one floor below the ground, on the same corridor as the kitchens. */}
                                </p>
                                <p className='raventext'>
                                    Now, there are a few things you should know about Hufflepuff house. First of all, let’s deal with a perennial myth about the place, which is that we’re the least clever house. WRONG. Hufflepuff is certainly the least boastful house, but we’ve produced just as many brilliant witches and wizards as any other. Want proof? Look up Grogan Stump, one of the most popular Ministers for Magic of all time. He was a Hufflepuff – as were the successful Ministers Artemesia Lufkin and Dugald McPhail. Then there’s the world authority on magical creatures, Newt Scamander; Bridget Wenlock, the famous thirteenth-century Arithmancer who first discovered the magical properties of the number seven, and Hengist of Woodcroft, who founded the all-wizarding village of Hogsmeade, which lies very near Hogwarts School. Hufflepuffs all.
                                </p>
                                <p className='raventext'> 
                                    So, as you can see, we’ve produced more than our fair share of powerful, brilliant and daring witches and wizards, but, just because we don’t shout about it, we don’t get the credit we deserve. Ravenclaws, in particular, assume that any outstanding achiever must have come from their house. I got into big trouble during my third year for duelling a Ravenclaw prefect who insisted that Bridget Wenlock had come from his house, not mine. I should have got a week of detentions, but Professor Sprout let me off with a warning and a box of coconut ice.
                                </p>
                                <p className='raventext'>
                                    Hufflepuffs are trustworthy and loyal. We don’t shoot our mouths off, but cross us at your peril; like our emblem, the badger, we will protect ourselves, our friends and our families against all-comers. Nobody intimidates us.
                                </p>
                                <p className='raventext'>
                                    However, it’s true that Hufflepuff is a bit lacking in one area. We’ve produced the fewest Dark wizards of any house in this school. Of course, you’d expect Slytherin to churn out evil-doers, seeing as they’ve never heard of fair play and prefer cheating over hard work any day, but even Gryffindor (the house we get on best with) has produced a few dodgy characters.
                                </p>
                                <p className='raventext'>
                                    What else do you need to know? Oh yes, the entrance to the common room is concealed in a stack of large barrels in a nook on the right hand side of the kitchen corridor. Tap the barrel two from the bottom, middle of the second row, in the rhythm of ‘Helga Hufflepuff’, and the lid will swing open. We are the only house at Hogwarts that also has a repelling device for would-be intruders. If the wrong lid is tapped, or if the rhythm of the tapping is wrong, the illegal entrant is doused in vinegar.
                                </p>
                                <p className='raventext'>
                                    You will hear other houses boast of their security arrangements, but it so happens that in more than a thousand years, the Hufflepuff common room and dormitories have never been seen by outsiders. Like badgers, we know exactly how to lie low – and how to defend ourselves.
                                </p>
                                <p className='raventext'>
                                    Once you’ve opened the barrel, crawl inside and along the passageway behind it, and you will emerge into the cosiest common room of them all. It is round and earthy and low-ceilinged; it always feels sunny, and its circular windows have a view of rippling grass and dandelions.
                                </p>
                                <p className='raventext'>
                                    There is a lot of burnished copper about the place, and many plants, which either hang from the ceiling or sit on the windowsills. Our Head of house, Professor Pomona Sprout, is Head of Herbology, and she brings the most interesting specimens (some of which dance and talk) to decorate our room – one reason why Hufflepuffs are often very good at Herbology. Our overstuffed sofas and chairs are upholstered in yellow and black, and our dormitories are reached through round doors in the walls of the common room. Copper lamps cast a warm light over our four-posters, all of which are covered in patchwork quilts, and copper bed warmers hang on the walls, should you have cold feet.
                                </p>
                                <p className='raventext'>
                                    Our house ghost is the friendliest of them all: the Fat Friar. You’ll recognise him easily enough; he’s plump and wears monk’s robes, and he’s very helpful if you get lost or are in any kind of trouble.
                                </p>
                                <p className='raventext'>
                                    I think that’s nearly everything. I must say, I hope some of you are good Quidditch players. Hufflepuff hasn’t done as well as I’d like in the Quidditch tournament lately.
                                </p>
                                <p className='raventext'>
                                    You should sleep comfortably. We’re protected from storms and wind down in our dormitories; we never have the disturbed nights those in the towers sometimes experience.
                                </p>
                                <p className='raventext'>
                                    And once again: congratulations on becoming a member of the friendliest, most decent and most tenacious house of them all.
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

export default connect(mapState, {getUserData})(Hufflepuff)