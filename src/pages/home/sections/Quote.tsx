import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

const Quote = () => {
    const navigate = useNavigate()

    return (
        <section className='bg-gray-50 py-16 md:py-24'>
            <RevealOnScroll>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='bg-white border border-gray-100 mx-auto max-w-3xl p-8 md:p-12 shadow-lg text-center'>
                        <h2 className='font-light mb-3 text-[#165B13] text-xl uppercase tracking-wider'>
                            We're just a call away
                        </h2>

                        <p className='font-bold mb-4 text-gray-900 text-3xl md:text-4xl'>
                            Get Your Instant Free Quote Now
                        </p>

                        <p className='font-light mb-8 text-gray-500 text-base'>
                            At no cost to you, get in touch and know exactly what you need to get that energy powered solution that caters to your needs.
                        </p>

                        <Button
                            onClick={() => navigate('/contact#contact-form')}
                            variant='primary'
                        >
                            Contact Our Experts
                        </Button>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Quote