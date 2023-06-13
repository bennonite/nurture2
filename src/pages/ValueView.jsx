import { Link, useOutletContext, useParams } from 'react-router-dom'

import { useState } from 'react';   

function ValueView(){

    const [ context ] = useOutletContext();
    const { data } = context;
    const { identityParam, valueParam } = useParams()
    const [ valueField, setValueField ] = useState('');

    if (!data) return;

    let activeIdentity = data.filter( d => d.slug === identityParam)[0]

    if (!activeIdentity) return;

    let activeValue = activeIdentity.values.filter( d => d.slug === valueParam)[0]

    if (!activeValue) return;

    function handleField(e){
        setValueField(e)
    }

    return (
        <>
            <h1>{activeValue.title}</h1>
            <div className="input-field">
                <textarea className="input-field__input" value={valueField} onChange={ e => handleField(e.target.value)} />
            </div>
            <Link to="./../">Back</Link>
        </>
    )
}

export default ValueView;