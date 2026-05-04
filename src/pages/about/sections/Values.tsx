import { HiSparkles, HiCog, HiShieldCheck, HiUsers } from 'react-icons/hi'

type ValueCardProps = {
    description: string
    icon: React.ReactNode
    title: string
}

const ValueCard = ({ description, icon, title }: ValueCardProps) => {
    return (
        <div className='bg-white border border-gray-100 hover:shadow-lg p-6 rounded-lg text-center transition-shadow'>
            <div className='inline-flex bg-emerald-100 mb-4 p-3 rounded-full'>
                {icon}
            </div>
            <h3 className='font-semibold mb-2 text-gray-800 text-lg'>{title}</h3>
            <p className='font-light text-gray-600 text-sm'>{description}</p>
        </div>
    )
}

const Values = () => {
    const values = [
        {
            icon: <HiSparkles className='h-6 text-[#008900] w-6' />,
            title: 'Innovation',
            description: 'Cutting-edge energy solutions for a sustainable future'
        },
        {
            icon: <HiShieldCheck className='h-6 text-[#008900] w-6' />,
            title: 'Reliability',
            description: 'Expert guidance from design to maintenance and support'
        },
        {
            icon: <HiUsers className='h-6 text-[#008900] w-6' />,
            title: 'Customer Focus',
            description: 'No cost consultations to know exactly what you need'
        },
        {
            icon: <HiCog className='h-6 text-[#008900] w-6' />,
            title: 'Excellence',
            description: 'Passionate about solving energy problems worldwide'
        }
    ]

    return (
        <section className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mb-10 text-center'>
                    <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                        our values
                    </p>
                    <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        What Drives Us
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Our passion revolves around solving energy problems and making green energy accessible to all.
                    </p>
                </div>

                <div className='grid gap-8 lg:grid-cols-2 items-center'>
                    <div className='grid gap-6 sm:grid-cols-2 order-last lg:order-first'>
                        {values.map((value, index) => (
                            <ValueCard
                                key={index}
                                description={value.description}
                                icon={value.icon}
                                title={value.title}
                            />
                        ))}
                    </div>

                    <div className='order-first lg:order-last'>
                        <img
                            alt='Team of renewable energy experts'
                            className='rounded-lg object-cover h-80 md:h-96 shadow-lg w-full'
                            src='https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values