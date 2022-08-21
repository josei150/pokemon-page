import React, {useEffect, useState} from 'react'
const pokemonSearch = [];
export const GetPokemones = () => {

    const [pokemones, setPokemones] = useState([]);


    const urlAPI = "https://pokeapi.co/api/v2/pokemon/6";
   

    const showData = async () => {
        const response = await fetch(urlAPI);
        const data = await response.json()

        const pokemon = {
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          imgJuego: data.sprites.front_default,
          imgCvg: data.sprites.other.dream_world.front_default,
          nombre: data.name,
          experiencia: data.base_experience,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          especial: data.stats[3].base_stat,
        };
        
        setPokemones(pokemon);
    }

    
    const card = (poke) => {
      
      return(
        <div>
          <span>{poke.nombre}</span>
          
          <img src={poke.img}/>
        </div>
            
            
      );
    }

    useEffect(() => {
        showData();
    }, []);

  return (
    
    <div>
    
        {card(pokemones)}
        
    </div>
  )
}
