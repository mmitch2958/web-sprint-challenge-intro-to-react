import React from 'react'
import styled from 'styled-components'


function ranArrGen(){
    const array = []
    for(let i=0; i<3; i++){
        array.push(Math.floor(Math.random()*590))        
    }
    return array;    
}

export default function Button(props){
    const {random} = props

    return(
        <button onClick={(event)=>{random(ranArrGen())}}>Random Rick and Morty Charecter</button>
    )

}