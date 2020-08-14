// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import Image from './Image'



const CharacterStyled = styled.div`
   
    display: flex;
    justify-content: space-between;
    width:40%;
    height: 35vh;
    border: 2px solid red;
 
    
    
    .box{
        align-items:center;
        justify-content:center;
        display:flex;
        
        
    }
    button{
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        background-color: grey;
        border-radius: 100%;
        border: 2px solid black;
        color: yellow;
        padding: 15px 32px;
        text-align: center;
        
    }
`


export default function Character (props){
    const{character,setIdRandomizer} = props;

    return (
        <CharacterStyled>
            <div className="box">
                <Image image={character.image} alt={character.species}/>                
                <div>
                    <Text character={character}/>
                    <Button random={setIdRandomizer}/>
                </div>
            </div>            
        </CharacterStyled>
    )
}