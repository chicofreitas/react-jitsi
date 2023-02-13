import { Link } from "react-router-dom"
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import PromoLtr from '../../components/PromoSections/PromoLtr'
import PromoRtl from '../../components/PromoSections/PromoRtl'

const Home = () => {
    return (
        <>
            <Header/>
            
            <HeroSection/>

            <PromoLtr/>

            <PromoRtl/>

            <Link to='/room'>
                Entrar na Sala
            </Link>
        </>
    )
}

export default Home;