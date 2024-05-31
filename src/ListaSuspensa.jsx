import React from 'react'
import './ListaSuspensa.css'

export default function ListaSuspensa(props) {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}


  return (
    <div className='lista_suspensa'>
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado} >
            <option value=""></option>
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
  )
}
