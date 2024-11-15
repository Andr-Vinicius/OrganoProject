import Card from '../Card'
import './Team.css'

const Team = (props) =>{
    // Dumb Component - Estático
    return(
        props.colaborador.length > 0 && <section className='team' style={{
            backgroundColor: props.corPrimaria,
        }}>
            <h3 style={{borderBottomColor: props.corSecundaria,}}>{props.label}</h3>
            <div className='cards'>
                {props.colaborador.map(colaborador => <Card 
                    nome={colaborador.name} 
                    cargo={colaborador.position}
                    imagem={colaborador.image}
                />)}        
            </div>
        </section>
    )
}

export default Team