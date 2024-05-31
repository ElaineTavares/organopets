import { useState } from "react";
import Banner from "./Banner";
import Formulario from "./Formulario";
import Time from "./Time";


function App() {

  const times = [
    {
      nome: "Dog",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Cat",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "Rabbit",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8"
    },
    {
      nome: "Pig",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9"
    },
    {
      nome: "Duck",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
  ]

  
  const [pets, setPets] = useState([]);

  const aoNovoPetAdicionado = (pet) =>{
    // console.log(pet)
    setPets([...pets, pet])
    console.log(pets)
  }

  return (
    <>
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoPetCadastrado={aoNovoPetAdicionado}/>
      <h1 className="titulo">Cards dos meus bichinhos fofinhos</h1>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      pets={pets.filter (pet => pet.time === time.nome)}
      />)}
    </>
  );
}

export default App;
