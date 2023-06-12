import { useState } from 'react';   
import { Link, useOutletContext, useParams } from 'react-router-dom'
import Input from '../components/Input';

function IdentityView(){

    const [ context ] = useOutletContext();
    const { data, addValue } = context;
    const { identityParam } = useParams()

    const [ valueField, setValueField ] = useState('');

    if (!data) return;

    let activeIdentity = data.filter( d => d.slug === identityParam)[0]

    if (!activeIdentity) return;

    console.log("activeIdentity ", activeIdentity)

    function updateValue(newValue){
        addValue(activeIdentity.slug, newValue)
        setValueField('')
    }

    return (
        <>
            <h1>{activeIdentity.title}</h1>
            {
                activeIdentity.values?.map( (value, i) => {
                    return <Link to={value.slug} key={`${value.slug}-${i}`}>{value.title}</Link>
                })
            }
            <p>-</p>
            <Input 
                handleDataChange={updateValue} 
                handleField={setValueField} 
                fieldValue={valueField} 
            />
            <Link to="./../">Back</Link>
        </>
    )
}

export default IdentityView;