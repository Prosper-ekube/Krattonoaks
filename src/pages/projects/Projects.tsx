import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Grid from './sections/Grid'
import Footer from '../../components/layout/Footer'

const Projects = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Grid />
            </main>
            <Footer />
        </>
    )
}

export default Projects