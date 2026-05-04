import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import GlobalPresence from './sections/GlobalPresence'
import Values from './sections/Values'
import CTA from './sections/CTA'
import Footer from '../../components/layout/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Mission />
                <GlobalPresence />
                <Values />
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default About