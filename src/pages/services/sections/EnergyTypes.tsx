import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

const EnergyTypes = () => {
    const capabilities = [
        { label: 'Solar Energy', percentage: 88, description: 'Harness the abundant power of the sun' },
        { label: 'Hybrid Energy', percentage: 83, description: 'Combine solar and wind for maximum efficiency' },
        { label: 'Geothermal Energy', percentage: 74, description: 'Tap into the earth\'s natural heat' },
        { label: 'Oil and Gas', percentage: 72, description: 'Tap into the earth\'s natural reserve of fossil fuels' }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    return (
        <RevealOnScroll>
            <section className='bg-white py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            Our Energy Capabilities
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500 text-base'>
                            Proven expertise across multiple renewable energy technologies
                        </p>
                    </div>

                    <motion.div
                        className='mx-auto max-w-2xl'
                        variants={containerVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div key={index} className='mb-8' variants={itemVariants}>
                                <div className='flex gap-4 items-center justify-between mb-2'>
                                    <span className='font-medium text-gray-800'>{cap.label}</span>
                                    <span className='font-bold text-[#165B13] text-xl'>{cap.percentage}%</span>
                                </div>
                                <div className='bg-gray-100 h-1 rounded-full'>
                                    <motion.div
                                        className='bg-[#165B13] h-1 rounded-full'
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${cap.percentage}%` }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <p className='font-light mt-2 text-gray-500 text-sm'>{cap.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default EnergyTypes