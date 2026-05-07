import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import Button from '../../../components/ui/Button'

const Hero = () => {
    const targetRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start']
    })

    // Background image expands as user scrolls (parallax effect)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

    return (
        <section className='relative min-h-screen md:h-screen overflow-hidden' ref={targetRef}>
            {/* Background image with parallax scale effect */}
            <motion.div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60)',
                    scale
                }}
            />

            {/* Dark overlay for text readability */}
            <div className='absolute bg-black/25 h-full inset-0 w-full' />

            {/* Content - scrollable on small devices */}
            <div className='relative mx-auto max-w-7xl px-6 lg:px-8 z-10 flex items-center min-h-screen md:h-full pb-8 pt-24 md:py-0'>
                <div className='mx-auto max-w-3xl text-center w-full'>
                    <h1 className='font-light mb-4 md:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight'>
                        Bringing the Effective <span className='font-semibold text-[#165B13]'>Solar Energy Solutions</span>
                    </h1>

                    <p className='font-light mx-auto max-w-2xl text-gray-100 text-sm sm:text-base md:text-lg mb-6 md:mb-8'>
                        Celebrate a sustainable future with our cutting-edge energy solutions.
                        Harness the power of the sun and wind to create a greener world while saving on your energy bills.
                    </p>

                    <div className='flex flex-col min-[375px]:flex-row gap-3 md:gap-4 justify-center'>
                        <Button
                            onClick={() => navigate('/contact#contact-form')}
                            variant='primary'
                        >
                            Contact Our Experts
                        </Button>

                        <Button
                            onClick={() => navigate('/about')}
                            variant='secondary'
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero