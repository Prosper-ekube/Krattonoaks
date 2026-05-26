import Navbar from '../../components/layout/Navbar'
import Hero from './sections/Hero'
import Quote from './sections/Quote'
import Welcome from './sections/Welcome'
import Services from './sections/Services'
import Stats from './sections/Stats'
import WhyChoose from './sections/WhyChoose'
import Process from './sections/Process'
import Industries from './sections/Industries'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Footer from '../../components/layout/Footer'

const Home = () => {
    // Data from original website
    const welcomeServices = [
        { number: '01', title: 'Renewable Energy' },
        { number: '02', title: 'Digital Optimization' },
        { number: '03', title: 'Parts & Maintenance' },
        { number: '04', title: 'Emission Reduction' }
    ]

    const greenServices = [        
        {
            title: 'Solar & Wind Energy',
            description: 'Harness the abundant power of the sun and the unyielding force of the wind to fuel your home or business.'
        },
        {
            title: 'Oil & Gas Solutions',
            description: 'Comprehensive upstream and downstream services including flare gas recovery, pipeline monitoring, and energy efficiency optimization for petroleum facilities.'
        },
        {
            title: 'Full Service Support',
            description: 'Our expert team of professionals will guide you through every step of the process, from design and installation to maintenance and support.'
        }
    ]

    const stats = [
        { label: 'Solar Energy', percentage: 88 },
        { label: 'Hybrid Energy', percentage: 83 },
        { label: 'Geothermal Energy', percentage: 74 },
        { label: 'Oil and Gas', percentage: 72 }
    ]

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Quote />
                <Welcome services={welcomeServices} />
                <Services services={greenServices} />
                <WhyChoose />
                <Process />
                <Industries />
                <Stats stats={stats} />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </>        
    )
}

export default Home