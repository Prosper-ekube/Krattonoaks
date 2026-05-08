import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type FaqItem = {
    answer: string
    question: string
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs: FaqItem[] = [
        {
            question: 'How long does installation take?',
            answer: 'Typically, residential installations take 1-3 days, while commercial projects may take 1-2 weeks depending on the size and complexity. We provide a detailed timeline during your free consultation.'
        },
        {
            question: 'Do you offer maintenance?',
            answer: 'Yes, we offer comprehensive maintenance packages including regular inspections, cleaning, performance monitoring, and 24/7 technical support. Our team ensures your system operates at peak efficiency year-round.'
        },
        {
            question: 'Can solar power run an entire home?',
            answer: 'Absolutely. With proper system design and battery storage, solar power can fully power your home. We assess your energy consumption during consultation to design a system that meets 100% of your needs.'
        },
        {
            question: 'Do you work outside Nigeria?',
            answer: 'Yes, we have experience working across Africa and beyond. Our team is available to bring energy solutions to your doorstep regardless of location. Contact us to discuss your specific needs.'
        },
        {
            question: 'What is hybrid energy?',
            answer: 'Hybrid energy systems combine multiple power sources — typically solar panels with battery storage and backup generators or grid connection. This ensures uninterrupted power supply even during cloudy days or nighttime.'
        },
        {
            question: 'What financing options are available?',
            answer: 'We offer flexible payment plans, lease options, and can help you explore government incentives and green energy grants. Contact our team to discuss the best option for your budget.'
        }
    ]

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

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
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' as const }
        }
    }

    return (
        <RevealOnScroll>
            <section className='bg-white py-16 md:py-24'>
                <div className='mx-auto max-w-4xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <p className='font-light mb-3 text-[#165B13] text-sm tracking-wide uppercase'>
                            got questions?
                        </p>
                        <h2 className='font-bold mb-3 text-gray-900 text-3xl md:text-4xl'>
                            Frequently Asked <span className='text-[#165B13]'>Questions</span>
                        </h2>
                        <p className='font-light mx-auto max-w-2xl text-gray-500'>
                            Everything you need to know about going solar with Kratton Oaks
                        </p>
                    </div>

                    <motion.div
                        className='flex flex-col gap-4'
                        initial='hidden'
                        viewport={{ once: true, amount: 0.2 }}
                        whileInView='visible'
                        variants={containerVariants}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className='border border-gray-100 hover:border-[#165B13] rounded-lg overflow-hidden transition-colors'
                                variants={itemVariants}
                            >
                                <button
                                    className='flex gap-4 items-center justify-between p-6 text-left w-full'
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className='font-medium text-gray-800 text-base md:text-lg'>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        className='text-[#165B13]'
                                        transition={{ duration: 0.3 }}
                                    >
                                        <HiChevronDown className='h-5 w-5' />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            animate={{ height: 'auto', opacity: 1 }}
                                            className='border-t border-gray-100'
                                            exit={{ height: 0, opacity: 0 }}
                                            initial={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className='p-6 pt-0'>
                                                <p className='font-light text-gray-600 leading-relaxed'>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default FAQ