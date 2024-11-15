import './Form.css'
import TextField from '../TextField/TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {
    
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }


    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados abaixo:</h2>
                <TextField value={name} required={true} onChanged={value => setName(value)} label="Nome" placeholder="Digite seu nome"/>
                <TextField value={position} required={true} onChanged={value => setPosition(value)} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField value={image} onChanged={value => setImage(value)} label="Imagem" placeholder="endereço da imagem"/>
                <Dropdown value={team} onChanged={value => setTeam(value)} required={true} label="Tripulação" itens={props.teams}/>
                <Button children="Criar card"/>
            </form>
        </section>
    )
}

export default Form