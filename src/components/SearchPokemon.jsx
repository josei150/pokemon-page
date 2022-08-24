import React from 'react'

export const SearchPokemon = (props) => {

  const handleForm = (even) => {
    even.preventDefault();
  }



  return (
    <form onSubmit={handleForm}>
        <input list='allPokemones'
          value={props.namePokemon} 
          onChange={props.searchPokemon}
        />
        <datalist id='allPokemones'>
          {props.allPokemon.map((listPoke) => (
            <option value={listPoke}></option>
          ))}
        </datalist>
        

    </form>
  )
}
