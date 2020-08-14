
import React, { useState,useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';

const App = () => {

  const[characters,setCharacter] = useState([])
  const[idRandomizer,setIdRandomizer] = useState([1,2,3,4])
  const rmApiUrl = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    axios
      .get(`${rmApiUrl}/${idRandomizer}`)
      .then(res => {
        setCharacter(res.data)
       
      })
      .catch(err => {
        console.log('Oh Shoot an ', err)
      })
  }, [idRandomizer]);



  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Charecters DEAD OR ALIVE!!</h1>
      {characters.map(character=>{
        {return <Character key={character.id} character={character} setIdRandomizer={setIdRandomizer}/>}
      })}      
    </div>
  );
}

export default App;