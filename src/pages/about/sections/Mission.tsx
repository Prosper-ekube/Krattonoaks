import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'
import { HiSun, HiGlobeAlt, HiChartBar } from 'react-icons/hi'

const Mission = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    return (
        <RevealOnScroll>
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='grid gap-12 md:grid-cols-2 md:gap-16 items-center'>
                        <div>
                            <p className='font-light mb-2 text-[#165B13] text-sm tracking-wide uppercase'>
                                our mission
                            </p>
                            <h2 className='font-bold mb-4 text-gray-900 text-2xl sm:text-3xl'>
                                Powering a Sustainable Future
                            </h2>
                            <p className='font-light mb-4 text-gray-600 text-base leading-relaxed'>
                                Save energy. Save cost. Preserve the environment while optimizing traditional energy operations.
                            </p>
                            <p className='font-light mb-6 text-gray-600 text-base leading-relaxed'>
                                Our passion revolves around solving energy problems across renewable and traditional sectors.
                                We believe that efficient, responsible energy solutions should be accessible to everyone,
                                regardless of location or circumstance.
                            </p>

                            <div className='flex flex-col gap-4'>
                                {[
                                    { icon: HiSun, text: 'Clean Energy Solutions' },
                                    { icon: HiGlobeAlt, text: 'Global Reach' },
                                    { icon: HiChartBar, text: 'Cost Savings' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className='flex gap-4 items-center'
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className='bg-[#165B13]/10 p-2 rounded-full'>
                                            <item.icon className='h-5 text-[#165B13] w-5' />
                                        </div>
                                        <span className='font-light text-gray-700 text-sm'>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className='order-first md:order-last'>
                            <img
                                alt='Solar panels on rooftop'
                                className='grayscale hover:grayscale-0 object-cover h-80 md:h-96 shadow-lg transition-all duration-1000 w-full'
                                loading='lazy'
                                src='https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Mission