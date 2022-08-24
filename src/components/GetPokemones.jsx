import React, {useEffect, useState} from 'react';
import { SearchPokemon } from './SearchPokemon';

let allPokemon = [];

export const GetPokemones = () => {

    const [pokemones, setPokemones] = useState([]);
    const [namePokemon, setNamePokemon] = useState("");


    const urlAPI = "https://pokeapi.co/api/v2/pokemon/";
   
    const fetchAllData = async () => {
      console.time("Fetch a todos los Pokemones");
      let response2 = await fetch(urlAPI);
      let allData = await response2.json();

      allData.results.map((pokeName) => {
        allPokemon.push(pokeName.name);
      })

      while(allData.next){
        response2 = await fetch(allData.next);
        allData = await response2.json();

        allData.results.map((pokeName) => {
          allPokemon.push(pokeName.name);
        })
      }

      //No sé el porqué se me repiten los datos, pero ya con esto dejo los nombres sin repetir
      // console.log(allPokemon);
      let uniqueName = new Set(allPokemon);
      allPokemon = [...uniqueName];
      // console.log(allPokemon);
      console.timeEnd("Fetch a todos los Pokemones");

    }

    fetchAllData();

    const showData = async (url = "https://pokeapi.co/api/v2/pokemon/6") => {
      const response = await fetch(url);
      const data = await response.json();
      
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
        allPokemon={allPokemon}

      />
        {card(pokemones)}
        
    </div>
  )
}
