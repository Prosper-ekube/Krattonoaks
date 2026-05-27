import Button from '../../../components/ui/Button'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
    const navigate = useNavigate()
    return (
        <RevealOnScroll>
            <section className='bg-[#165B13] py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <h2 className='font-light mb-3 text-white text-2xl sm:text-3xl md:text-4xl'>
                            Ready to Join the Energy Revolution?
                        </h2>
                        <p className='font-light mb-8 text-gray-200 text-base'>
                            Get your instant free quote today. We're just a call away.
                        </p>
                        <Button onClick={() => navigate('/contact#contact-form')} variant='whiteOutline'>
                            Contact Our Experts
                        </Button>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default CTA