import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

const CTA = () => {
    const navigate = useNavigate()

    return (
        <RevealOnScroll>
            <section className='bg-[#165B13] py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <h2 className='font-bold mb-3 text-white text-2xl sm:text-3xl md:text-4xl'>
                            Ready to Get Started?
                        </h2>

                        <p className='font-light mb-8 text-gray-200 text-base'>
                            Get your instant free quote today. We're just a call away.
                        </p>

                        <Button
                            variant='whiteOutline'
                            className='border-white text-white hover:bg-[#008900] hover:border-[#008900]'
                            onClick={() => navigate('/contact#contact-form')}
                        >
                            Contact Our Experts
                        </Button>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default CTA