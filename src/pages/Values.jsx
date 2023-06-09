import Button from "../components/Button";

function Values(props){

    let active = props.identities.filter( iden => iden.slug === props.activeIdentity)[0];

    if (!active) return

    return (
        <div>
            <h1>{props.activeIdentity}</h1>
            <div className="list">
            {
                active.values.map( value => {
                   return <Button key={value.slug} to="values" title={value.title } switchTo={props.switchTo}/ >
                })
            }
            </div>
            <Button switchTo={props.switchTo} title="home" to="home" />
        </div>
    )
}

export default Values;