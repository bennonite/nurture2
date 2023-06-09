import { Link } from 'react-router-dom'

function Home(props){
    return (
        <>
            <h1>Home</h1>
            <Link to="identity">Identity</Link>
        </>
    )
}

export default Home;