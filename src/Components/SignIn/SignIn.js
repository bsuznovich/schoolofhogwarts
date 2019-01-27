import React, {Component} from 'react'
import axios from 'axios'
import './SignIn.scss'

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    async signIn(){
        const {email, password} = this.state
        const res = await axios.post('/api/signin', {email: email, password: password})
        if(res.data.signedIn){
            this.props.history.push('/welcome')
        }
    }

    render(){
        return(
            <div className='SIBG'>
            <div className='littlespace'></div>
                <div className='signinpageBG'></div>
                <div className='signinsheet'>
                    <p className='enroll'>Sign In</p>
                    <br/>
                    <span className='enrollText'>Email: </span>
                    <br/>
                    <input className='signinInput' onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/>
                    <span className='enrollText'>Password: </span>
                    <br/>
                    <input className='signinInput' onChange={(e) => this.setState({password: e.target.value})}/>
                    <br/>
                    <br/>
                    <div className='buttonholder'>
                        <button className='enrollbtn' onClick={() => this.signIn()}>Sign in</button>
                        <button className='cancelbtn' onClick={() => this.props.history.push('/')}>Cancel</button>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <p>
                </p>
            </div>
        )
    }
}