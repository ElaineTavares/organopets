import React from 'react'
import './CampoTexto.css'

export default function CampoTexto(props) {

  // let valor = "Elaine Tavares"

  const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value)
  }
  

  return (
    <div className="campo_texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder} />
    </div>
  )
}
