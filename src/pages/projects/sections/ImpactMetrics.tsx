import { motion } from 'framer-motion'
import { HiChartBar, HiUsers, HiCloud, HiLightningBolt, HiCurrencyDollar } from 'react-icons/hi'
import { GiTreeDoor } from "react-icons/gi";
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Metric = {
    icon: React.ReactNode
    label: string
    suffix?: string
    value: string
}

const ImpactMetrics = () => {
    const metrics: Metric[] = [
        {
            icon: <HiLightningBolt className='h-6 w-6' />,
            value: '15+',
            label: 'MW Generated',
            suffix: 'Clean Energy'
        },
        {
            icon: <HiUsers className='h-6 w-6' />,
            value: '8,500+',
            label: 'Households',
            suffix: 'Powered'
        },
        {
            icon: <GiTreeDoor className='h-6 w-6' />,
            value: '12,000',
            label: 'Tons CO₂',
            suffix: 'Reduced Annually'
        },
        {
            icon: <HiCurrencyDollar className='h-6 w-6' />,
            value: '40%',
            label: 'Average Savings',
            suffix: 'On Energy Bills'
        },
        {
            icon: <HiCloud className='h-6 w-6' />,
            value: '24/7',
            label: 'Technical Support',
            suffix: 'Nationwide'
        },
        {
            icon: <HiChartBar className='h-6 w-6' />,
            value: '100%',
            label: 'Client Satisfaction',
            suffix: 'Rate'
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
            transition: { duration: 0.5, ease: 'easeOut' as const}
        }
    }

    return (
        <RevealOnScroll>
            <section className='bg-[#165B13] py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-emerald-200 text-sm tracking-wide uppercase'>
                            measurable results
                        </p>
                        <h2 className='font-bold mb-3 text-white text-3xl md:text-4xl'>
                            Our Impact in <span className='text-emerald-300'>Numbers</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-emerald-100 text-base'>
                            Real results from real projects across Nigeria
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className='bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 p-6 text-center transition-all'
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className='inline-flex mb-4 p-3 rounded-full bg-white/20'>
                                    <div className='text-white'>
                                        {metric.icon}
                                    </div>
                                </div>
                                <div className='font-bold mb-1 text-white text-3xl md:text-4xl'>
                                    {metric.value}
                                </div>
                                <p className='font-medium text-emerald-200 text-base'>
                                    {metric.label}
                                </p>
                                <p className='font-light text-emerald-300/80 text-sm'>
                                    {metric.suffix}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default ImpactMetrics