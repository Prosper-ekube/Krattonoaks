import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiClock } from 'react-icons/hi'

const Info = () => {
    const infoCards = [
        {
            icon: HiPhone,
            title: 'Call Us',
            description: '+1 470-403-7837 \n +234 706-117-4700',
            detail: 'Mon-Sat: 8AM - 6PM'
        },
        {
            icon: HiMail,
            title: 'Email Us',
            description: 'info@krattonoaks.com',
            detail: 'We respond within 24 hours'
        },
        {
            icon: HiClock,
            title: 'Business Hours',
            description: 'Monday-Friday: 8AM - 6PM',
            detail: 'Saturday: 9AM - 4PM' 
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
        <section className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <motion.div
                    className='grid gap-6 md:grid-cols-3'
                    variants={containerVariants}
                    viewport={{ once: true }}
                    whileInView="visible"
                >
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className='bg-white border border-gray-100 hover:shadow-md p-8 text-center transition-all hover:border-[#165B13]'
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className='bg-[#165B13]/10 inline-flex mb-4 p-3 rounded-full'>
                                <card.icon className='h-6 text-[#165B13] w-6' />
                            </div>
                            <h3 className='font-semibold mb-2 text-gray-800 text-lg'>{card.title}</h3>
                            <div className='font-medium text-gray-900 mb-1 whitespace-pre-line'>{card.description}</div>
                            <p className='font-light text-gray-500 text-sm'>{card.detail}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Info