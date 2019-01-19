import React from 'react'


export default function MyData(props){
    return(
        <div>
            <img src={props.picture} alt=''/>
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Year: {props.year}</p>
            <p>Points: {props.studentpoints}</p>
        </div>
    )
}