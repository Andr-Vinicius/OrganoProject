import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Form from './components/Form'
import Team from './components/Team'


function App() {

  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: ' #57c278'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#D9F7E5',
      corSecundaria: ' #57c274'
    },
    {
      nome: 'Back-end',
      corPrimaria: '#D9F7E5',
      corSecundaria: ' #57c274'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#D9F7E5',
      corSecundaria: ' #57c274'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner/>
      <Form teams={teams.map(team => team.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {teams.map(time => <Team 
        key={time.nome} 
        label={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaborador={colaboradores.filter(colaborador => colaborador.team === time.nome)}
      />)}
    </>
  )
}

export default App
