import { motion } from 'framer-motion'
import { HiStar, HiChat } from 'react-icons/hi'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Testimonial = {
    author: string
    quote: string
    role: string
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            quote: 'Kratton Oaks transformed our facility\'s energy efficiency. Our electricity bills have dropped by over 40% since installation.',
            author: 'Oghenetega Samuel Akpofure',
            role: 'Facility Manager, Enugu'
        },
        {
            quote: 'The team was professional from consultation to installation. Their maintenance support has been exceptional and reliable.',
            author: 'Mnena Grace Aondo',
            role: 'Operations Director, Lagos'
        },
        {
            quote: 'Going solar with Kratton Oaks was the best decision for our business. Clean energy, lower costs, and peace of mind.',
            author: 'Chidi Nwosu',
            role: 'CEO, GreenTech Industries'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            client stories
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            What Our <span className='text-[#165B13]'>Clients Say</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            Real results from real people who made the switch to clean energy
                        </p>
                    </div>

                    <motion.div
                        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className='bg-white border border-gray-100 hover:shadow-lg hover:border-[#165B13] p-8 transition-all group'
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                {/* Quote Icon */}
                                <div className='mb-4'>
                                    <HiChat className='h-8 text-[#165B13]/20 group-hover:text-[#165B13]/30 transition-colors w-8' />
                                </div>

                                {/* Star Rating */}
                                <div className='flex gap-0.5 mb-4'>
                                    {[...Array(5)].map((_, i) => (
                                        <HiStar key={i} className='h-4 text-[#165B13] w-4' />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <p className='font-light mb-6 text-gray-600 text-base leading-relaxed'>
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className='border-t border-gray-100 pt-4'>
                                    <p className='font-semibold text-gray-800'>
                                        {testimonial.author}
                                    </p>
                                    <p className='font-light text-[#165B13] text-sm'>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Testimonials