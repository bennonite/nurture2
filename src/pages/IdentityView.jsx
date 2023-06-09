import { Link, useOutletContext, useParams } from 'react-router-dom'

function IdentityView(){

    const [ context ] = useOutletContext();
    const { data } = context;
    const { identityParam } = useParams()

    if (!data) return;

    let activeIdentity = data.filter( d => d.slug === identityParam)[0]

    if (!activeIdentity) return;

    return (
        <>
            <h1>{activeIdentity.title}</h1>
            {
                activeIdentity.values?.map( value => {
                    return <Link to={value.slug}>{value.title}</Link>
                })
            }
            
            <p>..</p>
            <Link to="./../">Back</Link>
        </>
    )
}

export default IdentityView;