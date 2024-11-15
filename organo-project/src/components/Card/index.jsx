import './Card.css'

const Card = ({nome, imagem, cargo, corFundo}) =>{
    return(
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt='Imagem do card'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card