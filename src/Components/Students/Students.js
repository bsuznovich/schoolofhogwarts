import React from 'react'


export default function Students(props){
    return(
        <div>
            <img src={props.picture} alt=''/>
            <p>{props.firstname}</p>
            <p>{props.lastname}</p>
            <p>{props.year}</p>
            <p>{props.points}</p>
        </div>
    )
}