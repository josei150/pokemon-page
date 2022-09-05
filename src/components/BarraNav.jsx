import React from 'react';
import '../styles/BarraNav.css';
import { Link } from 'react-router-dom';


export const BarraNav = () => {
  return (
    <div className='Nav-container'>
      <img src={require('../assets/Logo.png')} className='Logo-img'></img>
      <ul>
        <li>
          <Link to={"/"} className='Enlace'><strong>Buscar Pokemon</strong></Link>
        </li>
        <li>
          <Link to={"/legendaries"} className='Enlace'><strong>Pokemons Legendarios</strong></Link>
        </li>
      </ul>
    </div>
  )
}
