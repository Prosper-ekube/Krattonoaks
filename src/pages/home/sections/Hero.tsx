import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className='relative bg-gray-900 pt-24 sm:pt-28 md:pt-32'>
            {/* Background Image */}
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-40 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80)'
                }}
            />

            {/* Content */}
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-3xl text-center'>
                    <h1 className='font-bold mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                        Bringing the Effective Solar Energy Solutions
                    </h1>
                    <p className='font-light mb-6 sm:mb-8 text-gray-200 text-base sm:text-lg md:text-xl'>
                        Celebrate a sustainable future with our cutting-edge energy solutions.
                        Harness the power of the sun and wind to create a greener world while
                        saving on your energy bills. Join the renewable revolution today!
                    </p>
                    <Button
                        variant='primary'
                        onClick={() => navigate('/contact')}
                    >
                        Contact Our Experts
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero