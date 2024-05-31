import React from 'react'
import './Pet.css'

export default function Pet(props) {
  return (
    <div className='pet'>
        <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
            <img src={props.imagem} alt={props.nome} />
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <p>{props.raca}</p>
        </div>
    </div>
  )
}
