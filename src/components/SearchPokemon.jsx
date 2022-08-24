import React from 'react'

export const SearchPokemon = (props) => {

  const handleForm = (even) => {
    even.preventDefault();
  }



  return (
    <form onSubmit={handleForm}>
        <input type="text" 
          value={props.namePokemon} 
          onChange={props.searchPokemon}
        /> 
        

    </form>
  )
}
