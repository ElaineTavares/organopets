import React from 'react'
import './Time.css'
import Pet from './Pet'

export default function Time(props) {

  return (
    (props.pets.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
                                  <div className='input_cor'>
                                    <p>Mude de cor</p>
                                    <input  value={props.corPrimaria} onChange={evento=> props.mudarCor(evento.target.value, props.nome)}  type="color" />
                                  </div>  
                                  <div className='input_cor_secundaria'>
                                    <p>Mude de cor</p>
                                    <input  value={props.corSecundaria} onChange={evento=> props.mudarCorSecundaria(evento.target.value, props.nome)}  type="color" />
                                  </div>   
                                  <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                                  <div className="pets">
                                    {props.pets.map(pet => {
                                      return <Pet corDeFundo={props.corPrimaria}  key={pet.nome} nome={pet.nome} raca={pet.raca} imagem={pet.imagem} aoDeletar={props.aoDeletar}/>
                                    })}
                                  </div>  
                               </section>
    
  )
}
