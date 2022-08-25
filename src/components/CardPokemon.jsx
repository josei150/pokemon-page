import React from 'react';

export const CardPokemon = (props) => {
  return (
    <div>
      <span>Nombre: {props.poke.nombre}</span>
      
      <img src={props.poke.img}/>
      <div>
        <span>HP: {props.poke.hp}</span><br/>
        <span>Ataque: {props.poke.ataque}</span><br/>
        <span>Defensa: {props.poke.defensa}</span><br/>
        <span>Especial: {props.poke.especial}</span><br/>
        <span>Experiencia: {props.poke.experiencia}</span><br/>
      </div>
    </div>
  )
}
