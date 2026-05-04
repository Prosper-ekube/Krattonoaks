import { useState } from 'react'
import Button from '../../../components/ui/Button'

type FormData = {
    email: string
    message: string
    name: string
    phone: string
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setIsSending(true)
        setIsSent(false)

        setTimeout(() => {
            console.log('Form submitted:', formData)

            setIsSending(false)
            setIsSent(true)

            // optional: reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <section className='bg-gray-50 py-12 sm:py-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 lg:grid-cols-2'>
                    <div>
                        <img
                            alt='Contact our energy experts'
                            className='rounded-lg object-cover h-full w-full'
                            src='https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                        />
                    </div>

                    <div>
                        <h2 className='font-bold mb-2 text-gray-900 text-2xl sm:text-3xl'>
                            Get Your Instant Free Quote
                        </h2>
                        <p className='font-light mb-6 text-gray-600'>
                            Fill out the form below and our experts will get back to you within 24 hours.
                        </p>

                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <div>
                                <label className='block font-medium mb-1 text-gray-700 text-sm'>
                                    Full Name *
                                </label>
                                <input
                                    className='bg-white border border-gray-300 focus:border-emerald-500 focus:outline-none px-4 py-2 rounded-md text-gray-900 text-sm transition-colors w-full'
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
                                    Email Address *
                                </label>
                                <input
                                    className='bg-white border border-gray-300 focus:border-emerald-500 focus:outline-none px-4 py-2 rounded-md text-gray-900 text-sm transition-colors w-full'
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
                                    Phone Number
                                </label>
                                <input
                                    className='bg-white border border-gray-300 focus:border-emerald-500 focus:outline-none px-4 py-2 rounded-md text-gray-900 text-sm transition-colors w-full'
                                    name='phone'
                                    placeholder='+234 702 573-9846'
                                    type='tel'
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className='block font-medium mb-1 text-gray-700 text-sm'>
                                    Message *
                                </label>
                                <textarea
                                    className='bg-white border border-gray-300 focus:border-emerald-500 focus:outline-none h-32 px-4 py-2 rounded-md resize-none text-gray-900 text-sm transition-colors w-full'
                                    name='message'
                                    placeholder='Tell us about your energy needs...'
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                className='w-full sm:w-auto'
                                disabled={isSending}
                                type='submit'
                                variant='primary'
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </Button>

                            {isSent && (
                                <p className='text-emerald-600 text-sm'>
                                    Message sent successfully.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form