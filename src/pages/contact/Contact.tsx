import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Info from './sections/Info'
import Form from './sections/Form'
import Footer from '../../components/layout/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Info />
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default Contact