import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'
import { HiSun, HiChip, HiCloud } from 'react-icons/hi'
import { PiToolboxDuotone } from 'react-icons/pi'

const MainServices = () => {
    const services = [
        {
            icon: HiSun,
            title: 'Renewable Energy',
            description: 'Harness the abundant power of the sun and the unyielding force of the wind to fuel your home or business.'
        },
        {
            icon: HiChip,
            title: 'Digital Optimization',
            description: 'Smart energy management systems that optimize your power usage and reduce waste through advanced analytics.'
        },
        {
            icon: PiToolboxDuotone,
            title: 'Parts & Maintenance',
            description: 'Expert team of professionals will guide you through every step, from installation to maintenance and support.'
        },
        {
            icon: HiCloud,
            title: 'Emission Reduction',
            description: 'Effective strategies to reduce your carbon footprint and meet sustainability goals.'
        }
    ]

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
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <motion.div
                        className='grid gap-8 md:grid-cols-2'
                        variants={containerVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-md hover:border-[#165B13] p-8 transition-all'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full'>
                                    <service.icon className='h-6 text-[#165B13] w-6' />
                                </div>
                                <h3 className='font-semibold mb-2 text-gray-800 text-xl'>{service.title}</h3>
                                <p className='font-light text-gray-500 leading-relaxed'>{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default MainServices