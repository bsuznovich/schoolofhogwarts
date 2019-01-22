import React from 'react'


export default function Students(props){
    return(
            <div className='student'>
                <img src={props.picture} alt='' className='studentimg'/>
                <p className='studenttext'>Name: {props.firstname} {props.lastname}</p>
                <p className='studenttext'>Year: {props.year}</p>
                <p className='studenttext'>Points: {props.points}</p>
            </div>
    )
}