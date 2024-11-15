import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Form from './components/Form'
import Team from './components/Team'


function App() {

  const teams = [
    {
      nome: 'Chapéus de Palha',
      corPrimaria: '#F20530',
      corSecundaria: '#F2B705'
    },
    {
      nome: 'Piratas do Barba Negra',
      corPrimaria: '#404040',
      corSecundaria: '#d3d3d3'
    },
    {
      nome: 'Piratas Heart',
      corPrimaria: '#F2B705',
      corSecundaria: '#0D0D0D'
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
