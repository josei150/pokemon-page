import React, {useEffect, useState} from 'react';
import {CardPokemon} from '../components/CardPokemon';
import {PokeBallOpen} from '../components/PokeBallOpen';
import '../styles/CardPokemon.css';


let allPokemonLegend = ['articuno', 'zapdos', 'moltres', 'mewtwo', 'raikou', 'entei', 'suicune', 'lugia', 'ho-oh', 'regirock', 'regice', 'registeel', 'latias', 'latios', 'kyogre', 'groudon', 'rayquaza', 'uxie', 'mesprit', 'azelf', 'dialga', 'palkia', 'heatran', 'regigigas', 'cresselia', 'cobalion', 'terrakion', 'virizion', 'reshiram', 'zekrom', 'kyurem', 'xerneas', 'yveltal', 'silvally', 'tapu-koko', 'tapu-lele', 'tapu-bulu', 'tapu-fini', 'cosmog', 'cosmoem', 'solgaleo', 'lunala', 'necrozma', 'zacian', 'zamazenta', 'eternatus', 'kubfu', 'regieleki', 'regidrago', 'glastrier', 'spectrier', 'calyrex'];


export const LegendariesPokemons = () => {

  // const APISpecies = "https://pokeapi.co/api/v2/pokemon-species/"

  // const fetchAllData = async () => {
  //   console.time("Fetch a todos los Pokemones");
  //   let response = await fetch(APISpecies);
  //   let allData = await response.json();

  //   allData.results.map((legendary) => {
  //     allPokemon.push(legendary.name);
  //   })

  //   while(allData.next){
  //     response = await fetch(allData.next);
  //     allData = await response.json();

  //     allData.results.map((legendary) => {
  //       allPokemon.push(legendary.name);
  //     })
  //   }

  //   console.timeEnd("Fetch a todos los Pokemones");

  //   console.log("Todos ", allPokemon);

  //   console.time("Fetch a todos los Pokemones legendarios");
  
  //   for(let pokemonLegend of allPokemon){
  //     let response2 = await fetch(APISpecies + pokemonLegend);
  //     let legendary = await response2.json();

  //     if(legendary.is_legendary){
  //       allPokemonLegend.push(legendary.name);
  //     }


  //   }

  //   console.timeEnd("Fetch a todos los Pokemones legendarios")

      
    
  //   console.log("Legendarios ", allPokemonLegend);

  // }

  // fetchAllData();


  const API = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeLegend, setPokeLegend] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchPokemonsLegend = async () => {

    allPokemonLegend.map(async (nameL) => {
      let response3 = await fetch(API + nameL);
      let data = await response3.json();
      //Puedo hacer un array acá para poder guardar todos los datos de los pokemons

      const dataPokemon = {
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
      
      setPokeLegend((pokeLegend) => ([...pokeLegend, dataPokemon]));
      
    })

      
  }

  useEffect(() => {
    fetchPokemonsLegend();
    
    setIsLoading(false);

    
  }, []);

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className='Container-Legends'>
      {pokeLegend.map((pokemonLegenedario, index) => (
        <PokeBallOpen key={index}>
          <CardPokemon poke={pokemonLegenedario} key={index} />
        </PokeBallOpen>
      ))}
    </div>
    )
  }
