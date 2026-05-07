import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type WelcomeProps = {
    services: Array<{
        number: string
        title: string
    }>
}

const Welcome = ({ services }: WelcomeProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <RevealOnScroll>
            <section className='bg-white py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>future is here</p>
                        <h2 className='font-bold mb-4 text-gray-900 text-3xl md:text-4xl'>
                            Welcome to <span className='text-[#165B13]'>Kratton Oaks</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500 text-lg'>
                            Be a part of the green revolution. Save energy. Save cost. Preserve the environment.
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-8 md:grid-cols-4'
                        variants={containerVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.number}
                                className='bg-gray-50 hover:shadow-md p-6 text-center transition-shadow hover:bg-[#008900]/5'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='font-bold mb-2 text-[#165B13] text-3xl'>{service.number}</div>
                                <h3 className='font-medium text-gray-800'>{service.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Welcome