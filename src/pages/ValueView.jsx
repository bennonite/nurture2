import { Link, useOutletContext, useParams } from 'react-router-dom'

function ValueView(){

    const [ context ] = useOutletContext();
    const { data } = context;
    const { identityParam, valueParam } = useParams()

    if (!data) return;

    let activeIdentity = data.filter( d => d.slug === identityParam)[0]

    if (!activeIdentity) return;

    let activeValue = activeIdentity.values.filter( d => d.slug === valueParam)[0]

    if (!activeValue) return;

    return (
        <>
            <h1>{activeValue.title}</h1>
            <p>..</p>
            <Link to="./../">Back</Link>
        </>
    )
}

export default ValueView;