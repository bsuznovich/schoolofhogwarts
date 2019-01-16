import React from 'react'


export default function Students(props){
    return(
        <div>
            <img src={props.picture} alt=''/>
            <p>Name: {props.firstname} {props.lastname}</p>
            <p>Year: {props.year}</p>
            <p>Points: {props.points}</p>
        </div>
    )
}