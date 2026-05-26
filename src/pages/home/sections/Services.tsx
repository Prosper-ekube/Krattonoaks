import { motion } from 'framer-motion'
import RevealOnScroll from "../../../components/ui/RevealOnScroll"

type Service = {
    description: string
    title: string
}

type ServicesSectionProps = {
    services: Service[]
}

const Services = ({ services }: ServicesSectionProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
    }

    return (
        <RevealOnScroll>
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>what we offer</p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>Our Power & Energy Services</h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            Comprehensive renewable energy and oil & gas solutions for a sustainable future.
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-8 md:grid-cols-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-md hover:border-[#165B13] p-8 transition-all'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className='font-semibold mb-3 text-gray-800 text-xl'>{service.title}</h3>
                                <p className='font-light text-gray-500 leading-relaxed'>{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Services