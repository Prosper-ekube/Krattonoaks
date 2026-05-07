import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className='bg-white pt-28 md:pt-40 pb-16 md:pb-20'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className='mx-auto max-w-3xl text-center'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                        our work
                    </p>
                    <h1 className='font-bold mb-4 text-gray-900 text-4xl sm:text-5xl md:text-6xl'>
                        Our Experience Around the Globe
                    </h1>
                    <p className='font-light text-gray-500 text-base sm:text-lg'>
                        Our team of experts are available to bring the solution you yearn for to your doorstep.
                        Borders have never been a challenge.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero