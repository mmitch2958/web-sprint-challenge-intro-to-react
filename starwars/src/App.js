import React from 'react';
import Character from './components/Character'
import './App.css';
import axios from 'axios'


const App = () => {
 
  const[characters,setCharacter] = useState([])
  const[idRandomizer,setIdRandomizer] = useState([1,2,3,4])
  const rickAndMortyApiBaseUrl = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    axios
      .get(`${rickAndMortyApiBaseUrl}/${idRandomizer}`)
      .then(res => {
        setCharacter(res.data)
       
      })
      .catch(err => {
        console.log('Oh no you have encountered an ', err)
      })
  }, [idRandomizer]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
