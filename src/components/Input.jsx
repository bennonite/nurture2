function Input(props){

    return (
        <div className="input-button">
            <input className="input-button__input" value={props.fieldValue} onChange={ e => props.handleField(e.target.value)} />
            <button className="input-button__button" onClick={() => props.handleDataChange(props.fieldValue)}>+</button>
        </div>
    )
}

export default Input;