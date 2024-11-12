import './Form.css'
import TextField from '../TextField/TextField'
import Dropdown from '../Dropdown'

const Form = () => {

    const teams = [
        'Poupatempo',
        'Detran',
        'Sabesp'
    ]

    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados abaixo:</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Times" itens={teams}/>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Form