import React, {Component} from 'react'


export default class MyData extends Component{
    constructor(props){
        super(props)
        this.state = {
            editToggle: true,
            picture: props.studentpicture,
            firstname: props.firstname,
            lastname: props.lastname,
            year: props.year,
            points: props.studentpoints
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
            <img src={this.state.studentpicture} alt=''/>
            <button onClick={this.state.updateFirstName}>Edit</button>
            {this.state.editToggle ?
                (
                    <>
                        <p>Name: {this.state.firstname} {this.state.lastname}</p>
                        <p>House: {this.state.housename}</p>
                        <p>Year: {this.state.year}</p>
                        <p>Points: {this.state.studentpoints}</p>
                    </>
                )
                : (
                    <>
                        <input value={this.state.firstname} />
                        <input value={this.state.lastname}/>
                        <input value={this.state.year}/>
                        <input value={this.state.points}/>
                    </>
                )}
            
        </div>
    )
}
}