
function Button(props){

    let { switchTo, to } = props;

    return (
        <button onClick={() => switchTo(to)}>{to}</button>
    )
}

export default Button;