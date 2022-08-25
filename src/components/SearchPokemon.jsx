import React from 'react'


export const SearchPokemon = (props) => {

  const handleForm = (even) => {
    even.preventDefault();
  }


  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Encuentra tu pokemon</label>
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
          <img src={props.pokemones.imgJuego}/>
        </div>

      </form>

      

    </div>

  )
}
