import './App.css';
import PokedexEntry from './pokedexEntry.js'
import { useEffect, useState } from 'react';
import './pokedexEntry.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    getPokemonList(151,0);
  }, []);

  const getPokemonList = (limit, offset) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)      
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
      <div  className="generations">
        <button onClick={() => getPokemonList(151)}>Generation 1</button>
        <button onClick={() => getPokemonList(100,151)}>Generation 2</button>
        <button onClick={() => getPokemonList(135,251)}>Generation 3</button>
        <button onClick={() => getPokemonList(107,386)}>Generation 4</button>
        <button onClick={() => getPokemonList(156,493)}>Generation 5</button>
        <button onClick={() => getPokemonList(72,649)}>Generation 6</button>
        <button onClick={() => getPokemonList()}>Generation 7</button>
        <button onClick={() => getPokemonList()}>Generation 8</button>
        <button onClick={() => getPokemonList()}>Generation 9</button>
      </div>
      <div className="pokedexEntrys">
        {pokemon.map((pokemon, index) => {
          return <PokedexEntry key={index} data={pokemon} />
        })}
      </div>
    </div>
  );
}

export default App;
