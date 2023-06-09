
function Button(props){

    let { switchTo, to, title } = props;

    return (
        <button onClick={() => switchTo(to)}>{title}</button>
    )
}

export default Button;