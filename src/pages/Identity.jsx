import Button from "../components/Button";

function Identity(props){
    return (
        <div>
            <h1>Identity Page</h1>
            <Button switchTo={props.switchTo} to="home" />
        </div>
    )
}

export default Identity;