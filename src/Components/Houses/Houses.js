import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import {getUserData} from '../../ducks/reducer'
import './Houses.scss'

class Houses extends Component{

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
    }

    render(){
        console.log(this.props)
        const {id} = this.props.user
        return(
            <div className='HousesBG'>
                {
                    id ? (
                        <div className='homepageBG'>
                            <div className='signoutholder'>
                                <Link to='/welcome'>
                                    <img className='homepic' src='https://i.pinimg.com/originals/59/2c/29/592c29f9c88063dc3870739854ab26e8.jpg' alt='' />
                                </Link>
                                <a href='http://localhost:4321/api/signout'>
                                    <button className='signout'>Sign Out</button>
                                </a>
                            </div>
                            <h1 className='school'>School Houses</h1>
                            <div className='navholder'>
                                <nav>
                                <p>
                                    <Link className='homelink' to='/welcome' style={{ textDecoration: 'none', color: '#ecb939' }}> Home </Link>
                                </p>
                                <p>
                                    <Link className='myhouselink' to='/myhouse/:houseid' style={{ textDecoration: 'none', color: '#ecb939' }}> My House </Link>
                                </p>
                                <p>
                                <Link className='profilelink' to='/myprofile' style={{ textDecoration: 'none', color: '#ecb939' }}> My Profile </Link>
                                </p>
                                </nav>
                            </div>
                            <div className='houseslist'>
                                <p>
                                    <Link to='/ravenclaw'>
                                        <button className='ravenclawbtn'>
                                            Ravenclaw
                                        </button> 
                                     </Link>
                                </p>
                                <p>
                                    <Link to='/gryffindor'> 
                                        <button className='gryffindorbtn'>
                                            Gryffindor
                                        </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/hufflepuff'>
                                        <button className='hufflepuffbtn'>
                                            Hufflepuff
                                        </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/slytherin'>
                                        <button className='slytherinbtn'>
                                            Slytherin
                                        </button>
                                    </Link>
                                </p>
                            </div>
                                <div className='descript'>
                                    <div className='ravendes'>
                                    Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was a medieval witch Rowena Ravenclaw. Members of this house are characterized by their wit, learning, and wisdom. The emblematic animal is symbol is an eagle, and blue and bronze are its colours.
                                    <br/>
                                    <br/>
                                    Ravenclaw corresponds roughly to the element of air, and it is for that reason that the House colours were chosen; blue and bronze represent the sky and eagle feathers respectively, both having much to do with air. The Ravenclaw points hourglass contains blue sapphires.
                                    </div>
                                    <div className='gryffindes'>
                                    Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Godric instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, and determination, to be Sorted into his house. The emblematic animal is a lion, and its colours are scarlet and gold.
                                    <br/>
                                    <br/>
                                    Gryffindor corresponds roughly to the element of fire, and it is for this reason that the colours scarlet and gold were chosen to represent the house. The colour of fire corresponds to that of a lion as well, with scarlet representing the mane and tail and gold representing the coat.
                                    </div>
                                    <div className='huffledes'>
                                    Hufflepuff is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal is a badger, and yellow and black are its colours.
                                    <br/>
                                    <br/>
                                    Hufflepuff corresponds roughly to the element of earth, and it is for that reason that the House colours were chosen: yellow represented wheat, while black was emblematic of soil. The Hufflepuff points hourglass contains yellow diamonds. Students sorted into Hufflepuff often demonstrate exceptional abilities in Herbology, owing to their correspondence to earth.
                                    </div>
                                    <div className='slytherdes'>
                                        Slytherin is one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics include: cunning, resourcefulness, and ambition.
                                    <br/>
                                    <br/>
                                        The emblematic animal of the house is a snake and its colours are green and silver. Slytherin corresponds roughly with the element of water due to serpents being commonly associated with the sea and lochs in western European mythology, as well as serpents being physically fluid and flexible animals.
                                    </div>
                                </div>
                        </div>
                        ) : <p>Please sign in</p>
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {getUserData})(Houses)