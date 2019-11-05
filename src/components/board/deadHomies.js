import React from 'react'

export default function(props){
    let deadWhite = props.white;
    let deadBlack = props.black;
    console.log(props)
    return(
        <>
        <ul>
            white dead pieces
        {deadWhite.map( piece => {
            return (<li> {piece.name} </li>)
        })}
        </ul>
        <ul>
            black dead pieces
        {deadBlack.map( piece => {
            return (<li>{piece.name}</li>)
        })}
        </ul>
        </>
    )
}