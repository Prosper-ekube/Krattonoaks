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
                        get in touch
                    </p>
                    <h1 className='font-bold mb-4 text-gray-900 text-4xl sm:text-5xl md:text-6xl'>
                        We're Just a Call Away
                    </h1>
                    <p className='font-light text-gray-500 text-base sm:text-lg'>
                        At no cost to you, get in touch and know exactly what you need
                        to get that energy powered solution that caters to your needs.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero