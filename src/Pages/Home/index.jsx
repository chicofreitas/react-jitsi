import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            Wellcome!!!
            
            <Link to='/room'>
                Entrar na Sala
            </Link>
        </>
    )
}

export default Home;