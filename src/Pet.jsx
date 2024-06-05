import React from 'react'
import './Pet.css'
import { IoIosCloseCircle } from "react-icons/io";

export default function Pet(props) {
  return (
    <div className='pet'>
        <IoIosCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => props.aoDeletar(props.pet.id)}
        />
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
