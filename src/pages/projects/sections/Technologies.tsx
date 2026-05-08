import { motion } from 'framer-motion'
import {
    HiChip,
    HiCloud,
    HiDatabase,
    HiDesktopComputer,
    HiLightningBolt,
    HiShieldCheck,
    HiChartBar
} from 'react-icons/hi'
import { FaWrench } from "react-icons/fa";
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Technology = {
    description: string
    icon: React.ReactNode
    title: string
}

const Technologies = () => {
    const technologies: Technology[] = [
        {
            icon: <HiChip className='h-6 w-6' />,
            title: 'Smart Inverters',
            description: 'Advanced power conversion technology with real-time monitoring and grid stabilization capabilities'
        },
        {
            icon: <HiLightningBolt className='h-6 w-6' />,
            title: 'Lithium-Ion Batteries',
            description: 'High-capacity energy storage systems for uninterrupted power supply day and night'
        },
        {
            icon: <HiCloud className='h-6 w-6' />,
            title: 'IoT Monitoring',
            description: 'Cloud-based platform for remote system monitoring, predictive maintenance, and performance analytics'
        },
        {
            icon: <HiDatabase className='h-6 w-6' />,
            title: 'Energy Management Software',
            description: 'AI-driven optimization of energy consumption patterns for maximum efficiency'
        },
        {
            icon: <HiDesktopComputer className='h-6 w-6' />,
            title: 'Design & Simulation Tools',
            description: 'Advanced 3D modeling and solar path analysis for optimal system placement'
        },
        {
            icon: <FaWrench className='h-6 w-6' />,
            title: 'Premium Solar Panels',
            description: 'Tier-1 photovoltaic panels with high efficiency and 25-year performance warranty'
        },
        {
            icon: <HiShieldCheck className='h-6 w-6' />,
            title: 'Surge Protection Systems',
            description: 'Comprehensive protection against voltage spikes and lightning strikes'
        },
        {
            icon: <HiChartBar className='h-6 w-6' />,
            title: 'Performance Analytics',
            description: 'Real-time dashboards and detailed reporting on energy generation and consumption'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' as const}
        }
    }

    return (
        <RevealOnScroll>
            <section className='bg-gray-50 pb-16 md:pb-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            cutting-edge solutions
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            Technologies <span className='text-[#165B13]'>We Use</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500 text-base'>
                            Industry-leading equipment and software for reliable, efficient energy systems
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-md hover:border-[#165B13] p-6 text-center transition-all group'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full group-hover:bg-[#165B13] transition-colors'>
                                    <div className='text-[#165B13] group-hover:text-white transition-colors'>
                                        {tech.icon}
                                    </div>
                                </div>
                                <h3 className='font-semibold mb-2 text-gray-800 text-base'>
                                    {tech.title}
                                </h3>
                                <p className='font-light text-gray-500 text-xs leading-relaxed'>
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Technologies