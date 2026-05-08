import { motion } from 'framer-motion'
import { HiBadgeCheck, HiShieldCheck, HiCurrencyDollar, HiGlobeAlt, HiUsers } from 'react-icons/hi'
import { ImRocket } from "react-icons/im";
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Reason = {
    description: string
    icon: React.ReactNode
    title: string
}

const WhyChoose = () => {
    const reasons: Reason[] = [
        {
            icon: <HiBadgeCheck className='h-6 w-6' />,
            title: 'Certified Energy Experts',
            description: 'Our team holds industry-leading certifications and brings years of hands-on experience'
        },
        {
            icon: <HiShieldCheck className='h-6 w-6' />,
            title: 'Reliable Maintenance',
            description: '24/7 support and regular upkeep to ensure your systems run at peak performance'
        },
        {
            icon: <HiCurrencyDollar className='h-6 w-6' />,
            title: 'Cost-Efficient Installations',
            description: 'Competitive pricing without compromising on quality or materials used'
        },
        {
            icon: <HiGlobeAlt className='h-6 w-6' />,
            title: 'Sustainable Technologies',
            description: 'Cutting-edge eco-friendly solutions that reduce carbon footprint and energy bills'
        },
        {
            icon: <ImRocket className='h-6 w-6' />,
            title: 'Fast Deployment',
            description: 'Quick turnaround times from consultation to full installation completion'
        },
        {
            icon: <HiUsers className='h-6 w-6' />,
            title: 'Nationwide Support',
            description: 'Serving clients across the country with dedicated local expertise'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
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
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            why choose us
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            Why Choose <span className='text-[#165B13]'>Kratton Oaks</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            We don't just provide energy solutions — we build lasting partnerships
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-md hover:border-[#165B13] p-6 text-center transition-all group'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full group-hover:bg-[#165B13] group-hover:text-white transition-colors'>
                                    <div className='text-[#165B13] group-hover:text-white transition-colors'>
                                        {reason.icon}
                                    </div>
                                </div>
                                <h3 className='font-semibold mb-2 text-gray-800 text-lg'>
                                    {reason.title}
                                </h3>
                                <p className='font-light text-gray-500 text-sm'>
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default WhyChoose