import { HiPhone, HiMail, HiClock } from 'react-icons/hi'

type InfoCardProps = {
    description: string
    icon: React.ReactNode
    title: string
}

const InfoCard = ({ description, icon, title }: InfoCardProps) => {
    return (
        <div className='bg-white border border-gray-100 hover:shadow-lg p-6 rounded-lg text-center transition-shadow'>
            <div className='bg-emerald-100 inline-flex mb-4 p-3 rounded-full'>
                {icon}
            </div>
            <h3 className='font-semibold mb-2 text-gray-800 text-lg'>{title}</h3>
            <p className='font-light text-gray-600'>{description}</p>
        </div>
    )
}

const Info = () => {
    return (
        <section className='bg-white py-12 sm:py-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-6 md:grid-cols-3'>
                    <InfoCard
                        icon={<HiPhone className='h-6 text-[#008900] w-6' />}
                        title='Call Us'
                        description='+1 (800) 555-1234'
                    />
                    <InfoCard
                        icon={<HiMail className='h-6 text-[#008900] w-6' />}
                        title='Email Us'
                        description='hello@krattonoaks.com'
                    />
                    <InfoCard
                        icon={<HiClock className='h-6 text-[#008900] w-6' />}
                        title='Business Hours'
                        description='Mon-Fri: 9AM - 6PM | Sat: 10AM - 4PM'
                    />
                </div>
            </div>
        </section>
    )
}

export default Info