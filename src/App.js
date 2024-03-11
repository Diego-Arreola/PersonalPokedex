import './App.css';
import PokedexEntry from './pokedexEntry.js'
import { useEffect, useState } from 'react';
import './pokedexEntry.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemon(data.results))
  }

  const getPokemon = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let pokedexdisplay = document.querySelector('.pokedexdisplay');
        pokedexdisplay.innerHTML = `<h2>${data.name}</h2><img src="${data.sprites.other.home.front_shiny}">`;
      })
  }
  return (
    <div className="pokedex" >
      <div className="header">
        <img id="pokemon_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"></img>
        <h1>Personal Pokedex</h1>
      </div>
      {/* <div className="pokedexdisplay"></div>
      <button onClick={getPokemonList}>Catch pokemon</button>
      <ul className="pokemonList">
        {pokemon.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}, {pokemon.url}</li>
        })}
      </ul>
      <button onClick={getPokemon('https://pokeapi.co/api/v2/pokemon/1')}>HOLAA</button> */}
      <div className="pokedexEntrys">
        {pokemon.map((pokemon, index) => {
          return <PokedexEntry key={index} data={pokemon} />
        })}
      </div>
    </div>
  );
}

export default App;
