import React, {Component} from 'react'

export default class HousePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
    }

    render(){
        return(
            <div>
                House Page
            </div>
        )
    }
}