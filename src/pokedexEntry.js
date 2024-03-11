import React, {useState, useEffect} from 'react';
import './pokedexEntry.css'; 

export default function PokedexEntry({data}){
    const [spriteUrl, setSpriteUrl] = useState();

    useEffect(() => {
        fetch(data.url)
          .then(response => response.json())
          .then(data => setSpriteUrl(data.sprites.versions['generation-v']['black-white'].animated.front_default));     
    }, [data.url]);

    return(
        console.log("Hola " + data.name),
        console.log("Hola " + data.url),

        

        <div className="pokedexEntry">
            <a href="" >{spriteUrl && <img id="pokemonSprite" src={spriteUrl} alt={data.name} />}</a>
            <h2>{data.name}</h2>
        </div>
    )
    
}