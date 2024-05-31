import React from 'react'
import './Time.css'
import Pet from './Pet'

export default function Time(props) {
  return (
    (props.pets.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
                                  <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                                  <div className="pets">
                                    {props.pets.map(pet => <Pet corDeFundo={props.corPrimaria}  key={pet.nome} nome={pet.nome} raca={pet.raca} imagem={pet.imagem}/>)}
                                  </div>  
                               </section>
    
  )
}
