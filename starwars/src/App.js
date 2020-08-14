import React from 'react';
import Character from './components/Character'
import './App.css';
import axios from 'axios'


const App = () => {
 
  const[characters,setCharacter] = useState([])
  const[idRandomizer,setIdRandomizer] = useState([1,2,3,4])
  const rmApiUrl  = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    axios
      .get(`${rmApiUrl }/${idRandomizer}`)
      .then(res => {
        setCharacter(res.data)
      })

      .catch(err => {
        console.log('Shoot its an ', err)
      })
  }, [idRandomizer]);

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Charecter's App</h1>
      {characters.map(character => {
        { return <Character key={character.id} character={character} setIdRandomizer={setIdRandomizer} /> }
      })}
    </div>
  );
}

export default App;
