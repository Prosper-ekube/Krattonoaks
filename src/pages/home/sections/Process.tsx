import { motion } from 'framer-motion'
import { HiOutlineChat, HiClipboard, HiOutlinePencil, HiSupport } from 'react-icons/hi'
import { FaWrench } from "react-icons/fa";
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Step = {
    description: string
    icon: React.ReactNode
    number: string
    title: string
}

const Process = () => {
    const steps: Step[] = [
        {
            number: '01',
            icon: <HiOutlineChat className='h-6 w-6' />,
            title: 'Consultation',
            description: 'We discuss your energy needs, goals, and budget to find the perfect solution'
        },
        {
            number: '02',
            icon: <HiClipboard className='h-6 w-6' />,
            title: 'Site Inspection',
            description: 'Our experts assess your location for optimal solar panel placement and efficiency'
        },
        {
            number: '03',
            icon: <HiOutlinePencil className='h-6 w-6' />,
            title: 'System Design',
            description: 'Custom-designed energy system tailored to your specific requirements'
        },
        {
            number: '04',
            icon: <FaWrench className='h-6 w-6' />,
            title: 'Installation',
            description: 'Professional, fast, and minimally invasive installation by certified technicians'
        },
        {
            number: '05',
            icon: <HiSupport className='h-6 w-6' />,
            title: 'Maintenance & Support',
            description: '24/7 ongoing support and regular maintenance for peace of mind'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' as const }
        }
    }

    return (
        <RevealOnScroll>
            <section className='bg-white py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            our process
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            How It <span className='text-[#165B13]'>Works</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            A simple, transparent journey from consultation to clean energy
                        </p>
                    </div>

                    <div className='relative'>
                        {/* Desktop Timeline Line - hidden on mobile */}
                        <div className='absolute bg-gray-200 h-0.5 left-0 top-24 hidden lg:block w-full' />

                        <motion.div
                            className='grid gap-8 lg:grid-cols-5'
                            initial='hidden'
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView='visible'
                            variants={containerVariants}
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className='relative'
                                    variants={itemVariants}
                                >
                                    <div className='bg-white border border-gray-100 hover:shadow-lg hover:border-[#165B13] p-6 text-center transition-all h-full group'>
                                        {/* Step Number */}
                                        <div className='font-bold mb-3 text-[#165B13]/30 text-5xl group-hover:text-[#165B13]/40 transition-colors'>
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full group-hover:bg-[#165B13] transition-colors'>
                                            <div className='text-[#165B13] group-hover:text-white transition-colors'>
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className='font-semibold mb-2 text-gray-800 text-lg'>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className='font-light text-gray-500 text-sm'>
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Connector Arrow - only on desktop */}
                                    {index < steps.length - 1 && (
                                        <div className='absolute -right-4 top-24 hidden lg:block'>
                                            <div className='text-gray-300 text-xl'>→</div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Process