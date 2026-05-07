import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../../../components/ui/Button'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type FormData = {
    email: string
    message: string
    name: string
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()

        setIsSending(true)
        setIsSent(false)

        await new Promise(resolve => setTimeout(resolve, 3000))

        console.log('Form submitted:', formData)

        setIsSending(false)
        setIsSent(true)

        setFormData({
            name: '',
            email: '',
            message: ''
        })

        setTimeout(() => {
            setIsSent(false)
        }, 4000)
    }

    return (
        <RevealOnScroll>
            <section className='bg-white py-16 md:py-24' id='contact-form'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl'>
                        <div className='mb-8 text-center'>
                            <h2 className='font-bold mb-2 text-gray-900 text-2xl sm:text-3xl'>
                                Get Your Instant Free Quote
                            </h2>

                            <p className='font-light text-gray-500'>
                                Fill out the form below and our experts will get back to you within 24 hours.
                            </p>
                        </div>

                        <motion.form
                            animate={{ opacity: 1, y: 0 }}
                            className='flex flex-col gap-5'
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className='block font-medium mb-1 text-gray-700 text-sm'>
                                    Full Name
                                </label>

                                <input
                                    className='bg-gray-50 border border-gray-200 focus:border-[#165B13] focus:outline-none px-4 py-3 rounded-none text-gray-900 text-sm transition-colors w-full'
                                    disabled={isSending}
                                    name='name'
                                    placeholder='John Doe'
                                    required
                                    type='text'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className='block font-medium mb-1 text-gray-700 text-sm'>
                                    Email Address
                                </label>

                                <input
                                    className='bg-gray-50 border border-gray-200 focus:border-[#165B13] focus:outline-none px-4 py-3 rounded-none text-gray-900 text-sm transition-colors w-full'
                                    disabled={isSending}
                                    name='email'
                                    placeholder='johndoe@gmail.com'
                                    required
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className='block font-medium mb-1 text-gray-700 text-sm'>
                                    Message
                                </label>

                                <textarea
                                    className='bg-gray-50 border border-gray-200 focus:border-[#165B13] focus:outline-none h-32 px-4 py-3 rounded-none resize-none text-gray-900 text-sm transition-colors w-full'
                                    disabled={isSending}
                                    name='message'
                                    placeholder='Tell us about your energy needs...'
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {isSent && (
                                <div className='border border-green-200 bg-green-50 px-4 py-3 text-green-700 text-sm'>
                                    Message sent successfully. Our team will contact you shortly.
                                </div>
                            )}

                            <Button
                                className='w-full'
                                disabled={isSending}
                                type='submit'
                                variant='primary'
                            >
                                {isSending ? 'Sending Message...' : 'Send Message'}
                            </Button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Form