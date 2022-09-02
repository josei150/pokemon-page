import React from 'react';
import '../styles/BarraNav.css';

export const BarraNav = () => {
  return (
    <div className='Nav-container'>
      <img src={require('../assets/Logo.png')} className='Logo-img'></img>
      <ul>
        <li>
          <strong>Buscar Pokemon</strong>
        </li>
        <li>
          <strong>Pokemons Legendarios</strong>
        </li>
      </ul>
    </div>
  )
}
