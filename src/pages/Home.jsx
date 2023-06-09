import { Link } from 'react-router-dom'

function Home(props){
    return (
        <>
            <div>Home</div>
            <Link to="identity">Identity</Link>
        </>
    )
}

export default Home;