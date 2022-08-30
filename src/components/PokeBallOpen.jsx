import React from 'react';
import "../styles/PokeBall.css";

export const PokeBallOpen = (props) => {
  return (
    <div className='Poke-container'>
      <div className='Poke Poke-up-open'>
        <div className='Pokemon'>
          {props.children}
        </div>
      </div>

      

      <div className='Poke Poke-down-open'>
          <div className='Poke-center-open'>
            <div className='Poke-boton'>
              <div className='Poke-boton-light'>
                <div className='Poke-boton-light-in'>
                  
                </div>
              </div>  
            </div>
          </div>
        </div>
      
    </div>
  )
}
