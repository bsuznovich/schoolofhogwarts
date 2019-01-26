import React, {Component} from 'react'
import axios from 'axios'
import './Enroll.scss'

export default class Enroll extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }

    async enroll() {
        const {email, password, firstName, lastName} = this.state
        const res = await axios.post(`/api/enroll`, {email: email, password: password, firstname: firstName, lastname: lastName})
        console.log(res)
        if(res.data.signedIn){
            this.props.history.push('/welcome')
        }
    }

    render(){
        return(
            <div className='EBG'>
            <div className='littlespace'></div>
                <div className='enrollpageBG'>
                    <div className='signinsheet' method='POST' action='send'>
                    <p className='enroll'>Enroll</p>
                        <br/>
                        <span className='enrollText'>Email: </span>
                        <br/>
                        <input className='enrollInput' onChange={(e) => this.setState({email: e.target.value})} />
                        <br/>
                        <span className='enrollText'>Password: </span>
                        <br/>
                        <input className='enrollInput' onChange={(e) => this.setState({password: e.target.value})} />
                        <br/>
                        <span className='enrollText'>First Name: </span>
                        <br/>
                        <input className='enrollInput' onChange={(e) => this.setState({firstName: e.target.value})} />
                        <br/>
                        <span className='enrollText'>Last Name: </span>
                        <br/>
                        <input className='enrollInput' onChange={(e) => this.setState({lastName: e.target.value})} />
                        <br/>
                        <br/>
                    <div className='buttonholder'>
                        <button className='enrollbtn' type='submit' onClick={() => this.enroll()}>Enroll</button>
                        <button className='cancelbtn' onClick={() => this.props.history.push('/')}>Cancel</button>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}