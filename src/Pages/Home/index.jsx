import { Link } from "react-router-dom"
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import PromoLtr from '../../components/PromoSections/PromoLtr'
import PromoRtl from '../../components/PromoSections/PromoRtl'
import FeaturesSection from '../../components/FeaturesSection'
import DownloadSection from '../../components/DownloadSection'
import FaqSection from '../../components/FaqSection'
import BaseKnowledge from '../../components/BaseKnowledgeSection'
import Footer from '../../components/Footer'
import CopyrightSection from '../../components/CopyrightSection'

const Home = () => {
    return (
        <>
            <Header/>
            
            <HeroSection/>

            <PromoLtr/>

            <PromoRtl/>

            <FeaturesSection/>

            <DownloadSection />

            <FaqSection/>

            <BaseKnowledge/>

            <Footer/>

            <CopyrightSection />

            <Link to='/room'>
                Entrar na Sala
            </Link>
        </>
    )
}

export default Home;