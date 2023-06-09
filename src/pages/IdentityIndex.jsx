import { Link, useOutletContext, useParams } from 'react-router-dom'


function IdentityIndex(){

    const [ context ] = useOutletContext();
    const { data } = context;
    const { identityParam } = useParams()

    if (!data) return;

    return (
        <>
            <h1>Identity</h1>
            {
                data.map( identity => {
                    return <Link to={identity.slug} key={identity.slug}>{identity.title}</Link>
                })
            }
            <p>-</p>
           <Link to="./../">Back</Link>
        </>
    )
}

export default IdentityIndex;