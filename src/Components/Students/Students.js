import React from 'react'


export default function House(props){
    return(
        <div>
            <p>{props.firstname}</p>
            <p>{props.lastname}</p>
            <p>{props.year}</p>
            <p>{props.points}</p>
        </div>
    )
}