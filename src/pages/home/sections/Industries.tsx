import { motion } from 'framer-motion'
import { HiHome, HiOfficeBuilding, HiAcademicCap, HiHeart } from 'react-icons/hi'
import { MdFactory } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Industry = {
    description: string
    icon: React.ReactNode
    title: string
}

const Industries = () => {
    const industries: Industry[] = [
        {
            icon: <HiHome className='h-6 w-6' />,
            title: 'Residential',
            description: 'Custom solar solutions for homes of all sizes, reducing electricity bills and carbon footprint'
        },
        {
            icon: <HiOfficeBuilding className='h-6 w-6' />,
            title: 'Commercial',
            description: 'Office buildings, retail spaces, and business complexes powered by clean energy'
        },
        {
            icon: <MdFactory className='h-6 w-6' />,
            title: 'Industrial',
            description: 'Heavy-duty energy solutions for factories and manufacturing facilities'
        },
        {
            icon: <HiAcademicCap className='h-6 w-6' />,
            title: 'Schools',
            description: 'Educational institutions benefiting from lower operational costs and sustainable energy'
        },
        {
            icon: <HiHeart className='h-6 w-6' />,
            title: 'Hospitals',
            description: 'Reliable, uninterrupted power for critical healthcare facilities'
        },
        {
            icon: <IoHome className='h-6 w-6' />,
            title: 'Estates',
            description: 'Comprehensive energy solutions for gated communities and housing estates'
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
            transition: { duration: 0.4, ease: 'easeOut' as const }
        }
    }

    return (
        <RevealOnScroll>
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            our expertise
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            Industries We <span className='text-[#165B13]'>Serve</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            Tailored energy solutions for every sector
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-md hover:border-[#165B13] p-6 text-left transition-all group'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full group-hover:bg-[#165B13] transition-colors'>
                                    <div className='text-[#165B13] group-hover:text-white transition-colors'>
                                        {industry.icon}
                                    </div>
                                </div>
                                <h3 className='font-semibold mb-2 text-gray-800 text-lg'>
                                    {industry.title}
                                </h3>
                                <p className='font-light text-gray-500 text-sm leading-relaxed'>
                                    {industry.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Industries