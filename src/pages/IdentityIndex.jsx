import { useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom'
import Input from '../components/Input';


function IdentityIndex(){

    const [ context ] = useOutletContext();
    const { data, addIdentity } = context;
    const { identityParam } = useParams()

    const [ identityField, setIdentityField ] = useState('');

    if (!data) return;


    function updateIdentity(newId){
        addIdentity(newId)
        setIdentityField('')
    }

    return (
        <>
            <h1>Identity</h1>
            {
                data.map( (identity, i) => {
                    return <Link to={identity.slug} key={`${identity.slug}-${i}`}>{identity.title}</Link>
                })
            }
            <p>-</p>
            <Input 
                handleDataChange={updateIdentity} 
                handleField={setIdentityField} 
                fieldValue={identityField} 
            />
           <Link to="./../">Back</Link>
        </>
    )
}

export default IdentityIndex;