import Button from "../components/Button";

function Home(props){
    return (
        <div>
            <h1>Home Page</h1>
            <Button switchTo={props.switchTo} title="Identity" to="identities" />
        </div>
    )
}

export default Home;