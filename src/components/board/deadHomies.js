import React from 'react'

export default function(props){
    let deadWhite = props.white;
    let deadBlack = props.black;
    console.log(props)
    return(
        <>
        <ul className="dead-homies-white">
           
        {deadWhite.map( piece => {
            return (<li> <img src={piece.icon} width='45' /></li>)
        })}
        </ul>
        <ul className="dead-homies-black">
        {deadBlack.map( piece => {
            return (<li> <img src={piece.icon} width='45' /></li>)
        })}
        </ul>
        </>
    )
}