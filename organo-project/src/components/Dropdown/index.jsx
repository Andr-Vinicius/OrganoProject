import './Dropdown.css'
// Map x Foreach

const Dropdown = (props) => {

    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown