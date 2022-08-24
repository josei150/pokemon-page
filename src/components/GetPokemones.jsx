import React, {useEffect, useState} from 'react';
import { SearchPokemon } from './SearchPokemon';
const pokemonSearch = [];

export const GetPokemones = () => {

    const [pokemones, setPokemones] = useState([]);
    const [namePokemon, setNamePokemon] = useState("");


    const urlAPI = "https://pokeapi.co/api/v2/pokemon/";
   

    const showData = async (url = "https://pokeapi.co/api/v2/pokemon/6") => {
      const response = await fetch(url);
      const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json()
      const data2 = await response2.json()
      console.log(data2);

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

    const searchPokemon = (even) => {
      const namePoke = even.target.value.toLowerCase();
      setNamePokemon(namePoke);
      showData(urlAPI + namePoke);
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
      <SearchPokemon 
        showData = {showData} 
        namePokemon={namePokemon}
        searchPokemon={searchPokemon}

      />
        {card(pokemones)}
        
    </div>
  )
}
