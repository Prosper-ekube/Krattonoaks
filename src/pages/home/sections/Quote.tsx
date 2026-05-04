import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'

const Quote = () => {
    const navigate = useNavigate()
    return (
        <section className='relative bg-emerald-800'>
            {/* Background Image */}
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-20 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />

            {/* Content */}
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='font-bold mb-2 text-white text-2xl sm:text-3xl md:text-4xl'>
                        Get Your Instant Free Quote Now
                    </h2>
                    <p className='font-light mb-2 text-emerald-100 text-base'>
                        We're just a call away
                    </p>
                    <p className='font-light mb-6 sm:mb-8 text-emerald-100 text-sm sm:text-base'>
                        At no cost to you, get in touch and know exactly what you need
                        to get that energy powered solution that caters to your needs.
                    </p>
                    <Button variant='outline' onClick={() => navigate('/contact')} className='border-white text-white hover:bg-white hover:text-emerald-700'>
                        Contact Our Experts
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Quote