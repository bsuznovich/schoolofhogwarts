import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import './Homepage.scss'

export default class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            firstName: '',
            lastName: ''
        }
    }

    render(){
        return(
            <div className='homebody'>
            <div className='littlespace'></div>
                <div className='homepageBG'>
                    <h1 className='hogwarts'>Hogwarts</h1>
                    <div className='houses'>
                        <button className='ravenbtn'>Ravenclaw</button>
                        <button className='gryffinbtn'>Gryffindor</button>
                        <button className='hufflebtn'>Hufflepuff</button>
                        <button className='slythbtn'>Slytherin</button>
                    </div>
                    <div className='logen'>
                        <Link to='/signin'><button className='logenbtn'>Sign In</button></Link>
                        <Link to='/enroll'><button className='logenbtn'>Enroll</button></Link>
                    </div>
                    <div className='body'>
                        <br/>
                        <br/>
                        <br/>
                        <p>
                            Founded roughly a thousand years ago by the four Founders, Hogwarts, the premier Wizarding school in Britain, is housed in a large magically-active castle near the Wizarding village of Hogsmeade. The castle itself is protected by Anti-Apparition wards, and Muggle-Repellent charms. The Forbidden Forest, adjacent to the school grounds, contains many wild magical creatures, some of which are actively hostile towards humans, Wizarding or not. Situated at the edge of the Forest, the Groundskeeper's Hut, where Rubeus Hagrid lives, is well-placed for looking after the subjects of each Care of Magical Creatures class.
                        </p>
                        <p>
                            The Hogwarts student body is Sorted at enrollment, along lines of aptitude and predilection, into four Houses named after the four Founders and nurturing those characteristics each Founder thought most important. Since even the Founders were unable to keep solidarity, the Houses, each with a professor who doubles as the Head of that House, tend towards friction and rivalry, particularly between Slytherin and Gryffindor. The rivalries usually confine themselves to Quidditch and the House Cup competition.
                        </p>
                        <p>
                            Castle security is assisted by the House Ghosts, and by the many Wizarding portraits (paintings where the depicted person can speak and move from frame to frame), such as Phineas Nigellus, The Fat Lady, and Sir Cadogan, which password-protect some passages and monitor the rooms and corridors.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}