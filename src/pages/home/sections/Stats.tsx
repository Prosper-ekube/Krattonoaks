import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Stat = {
    label: string
    percentage: number
}

type StatsSectionProps = {
    stats: Stat[]
}

const Stats = ({ stats }: StatsSectionProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>green power</p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>Our Experience Around the Globe</h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500 text-base'>
                            Our team of experts are available to bring the solution you yearn for to your doorstep.
                            Borders have never been a challenge.
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 md:grid-cols-4'
                        variants={containerVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className='bg-gray-50 hover:shadow-md p-8 text-center transition-shadow hover:bg-[#008900]/5'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='font-bold mb-2 text-[#165B13] text-4xl md:text-5xl'>
                                    {stat.percentage}%
                                </div>
                                <div className='bg-[#165B13] h-1 mx-auto my-4 rounded-full w-12' />
                                <p className='font-medium text-gray-800 text-lg'>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Stats