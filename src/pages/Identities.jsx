import Button from "../components/Button";

function Identities(props){

    return (
        <div>
            <h1>Identity</h1>
            <div className="list">
            {
                props.identities.map( ident => {
                   return <button key={ident.slug} onClick={() => props.setActiveIdentity(ident.slug)} >{ident.title}</button>
                })
            }
            </div>
            <Button switchTo={props.switchTo} title="home" to="home" />
        </div>
    )
}

export default Identities;