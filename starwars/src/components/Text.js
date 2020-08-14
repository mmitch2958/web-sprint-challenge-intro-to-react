import React from 'react'
import styled from 'styled-components'


export default function Text(props){
    const{character} = props;

    return (
        <div>
            <h1>Name: {character.name}</h1>
            <h2>Gender: {character.gender}</h2>
            <h2>Status:{character.status}</h2>
            <h3>Species:{character.species}</h3>
            
        </div>

    )
}