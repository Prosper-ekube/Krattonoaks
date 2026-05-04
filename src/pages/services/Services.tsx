import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import MainServices from './sections/MainServices'
import EnergyTypes from './sections/EnergyTypes'
import CTA from './sections/CTA'
import Footer from '../../components/layout/Footer'

const Services = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <MainServices />
                <EnergyTypes />
                <CTA />
            </main>
            <Footer />
        </>        
    )
}

export default Services