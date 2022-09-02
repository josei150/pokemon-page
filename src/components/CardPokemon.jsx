import React from 'react';
import "../styles/CardPokemon.css";

export const CardPokemon = (props) => {
  
  return (
    <div className='Card-container'>
      
      
      <img src={props.poke.img} className='Imagen-poke'/>
      <div >
        <span><strong>Nombre: </strong>{props.poke.nombre}</span><br/>
        <span><strong>HP: </strong>{props.poke.hp}</span><br/>
        <span><strong>Ataque: </strong>{props.poke.ataque}</span><br/>
        <span><strong>Defensa: </strong>{props.poke.defensa}</span><br/>
        <span><strong>Especial: </strong>{props.poke.especial}</span><br/>
        <span><strong>Experiencia: </strong>{props.poke.experiencia}</span><br/>
      </div>
    </div>
  )
}
