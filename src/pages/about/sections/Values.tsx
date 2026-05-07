import { motion } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'
import { HiSparkles, HiCog, HiShieldCheck, HiUsers } from 'react-icons/hi'

const Values = () => {
    const values = [
        {
            icon: HiSparkles,
            title: 'Innovation',
            description: 'Cutting-edge energy solutions for a sustainable future'
        },
        {
            icon: HiShieldCheck,
            title: 'Reliability',
            description: 'Expert guidance from design to maintenance and support'
        },
        {
            icon: HiUsers,
            title: 'Customer Focus',
            description: 'No cost consultations to know exactly what you need'
        },
        {
            icon: HiCog,
            title: 'Excellence',
            description: 'Passionate about solving energy problems worldwide'
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
            <section className='bg-white py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-2 text-[#165B13] text-sm tracking-wide uppercase'>
                            our values
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            What Drives Us
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500 text-base'>
                            Our passion revolves around solving energy problems and making green energy accessible to all.
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
                        variants={containerVariants}
                        viewport={{ once: true }}
                        whileInView="visible"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className='bg-gray-50 hover:shadow-md p-6 text-center transition-shadow hover:bg-[#008900]/5'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full'>
                                    <value.icon className='h-6 text-[#165B13] w-6' />
                                </div>
                                <h3 className='font-semibold mb-2 text-gray-800 text-lg'>{value.title}</h3>
                                <p className='font-light text-gray-500 text-sm'>{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Values