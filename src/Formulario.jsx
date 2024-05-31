import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'
import ListaSuspensa from './ListaSuspensa'
import Botao from './Botao'

export default function Formulario(props) {

  const [nome, setNome] = useState('')
  const [raca, setRaca] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

 const aoSalvar = (evento) =>{
      evento.preventDefault()
      props.aoPetCadastrado({
      nome: nome,
      raca: raca,
      imagem: imagem,
      time: time
    })
    setNome('');
    setRaca('');
    setImagem('');
    setTime('')
 }

  return (
    <form className='formulario' onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu pet</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite o nome do seu pet"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
        obrigatorio={true} 
        label="Raça" 
        placeholder="Digite a raça do seu pet"
        valor={raca}
        aoAlterado={valor => setRaca(valor)}
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Informe o endereço da imagem"
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
 
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={props.times}
        valor={time}
        aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
    </form>
  )
}
