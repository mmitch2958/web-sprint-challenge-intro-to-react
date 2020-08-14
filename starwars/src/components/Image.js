import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled.img


export default function Image(props) {
    const{image,species} = props;

    return(
        <ImageStyled src={image} alt={species}/>
    )
}