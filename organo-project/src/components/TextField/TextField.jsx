import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    // hook do estado (Oq é um hook)
    //const [value, setValue] = useState('Vinicius')

    const typed = (event) => {
        props.onChanged(event.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={props.placeholder}></input>      
        </div>
    )
}

export default TextField