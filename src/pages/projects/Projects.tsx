import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Grid from './sections/Grid'
import Footer from '../../components/layout/Footer'
import Technologies from './sections/Technologies'
import ImpactMetrics from './sections/ImpactMetrics'

const Projects = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Grid />
                <Technologies />
                <ImpactMetrics />
            </main>
            <Footer />
        </>
    )
}

export default Projects