import './Form.css'
import TextField from '../TextField/TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'

const Form = () => {

    const onSave = (event) => {
        event.preventDefault()
        console.log(event.target)
        console.log("Form foi submetido")
    }

    const teams = [
        'Poupatempo',
        'Detran',
        'Sabesp'
    ]

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados abaixo:</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown required={true} label="Times" itens={teams}/>
                <Button children="Criar card"/>
            </form>
        </section>
    )
}

export default Form