import React from 'react';
import '../styles/SearchPokemon.css';


export const SearchPokemon = (props) => {

  const handleForm = (even) => {
    even.preventDefault();
  }


  return (
    <div className='Search-container'>
      <form onSubmit={handleForm} className='Search-form'>
        <label><strong>Encuentra tu pokemon</strong></label>
        <div>
          <input list='allPokemones'
            value={props.namePokemon} 
            onChange={props.searchPokemon}
          />
          <datalist id='allPokemones'>
            {props.allPokemon.map((listPoke, item) => (
              <option value={listPoke} key={item}></option>
            ))}
          </datalist>
          
        </div>
        
      </form>
      <img src={props.pokemones.imgJuego}/>
    </div>

  )
}
