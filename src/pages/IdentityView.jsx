import { Link } from 'react-router-dom'

function IdentityView(){
    return (
        <>
            <div>Identity View</div>
            <Link to="loving">Loving</Link>
            <p></p>
            <Link to="../">Home</Link>
        </>
    )
}

export default IdentityView;