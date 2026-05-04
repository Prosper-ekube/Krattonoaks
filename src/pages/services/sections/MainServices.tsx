import { HiSun, HiChip, HiCloud } from 'react-icons/hi'
import { PiToolboxDuotone } from 'react-icons/pi'

type ServiceCardProps = {
    description: string
    icon: React.ReactNode
    imageUrl: string
    title: string
}

const ServiceCard = ({ description, icon, imageUrl, title }: ServiceCardProps) => {
    return (
        <div className='bg-white border border-gray-100 hover:shadow-lg overflow-hidden rounded-lg transition-shadow'>
            <img
                alt={title}
                className='h-48 object-cover w-full'
                src={imageUrl}
            />
            <div className='p-6'>
                <div className='bg-emerald-100 inline-flex mb-4 p-3 rounded-full'>
                    {icon}
                </div>
                <h3 className='font-semibold mb-2 text-gray-800 text-xl'>{title}</h3>
                <p className='font-light text-gray-600 text-base'>{description}</p>
            </div>
        </div>
    )
}

const MainServices = () => {
    const services = [
        {
            icon: <HiSun className='h-6 text-[#008900] w-6' />,
            title: 'Renewable Energy',
            description: 'Harness the abundant power of the sun and the unyielding force of the wind to fuel your home or business.',
            imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <HiChip className='h-6 text-[#008900] w-6' />,
            title: 'Digital Optimization',
            description: 'Smart energy management systems that optimize your power usage and reduce waste through advanced analytics.',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            icon: <PiToolboxDuotone  className='h-6 text-[#008900] w-6' />,
            title: 'Parts & Maintenance',
            description: 'Expert team of professionals will guide you through every step, from installation to maintenance and support.',
            imageUrl: 'src/assets/images/maintenance.jpg'
        },
        {
            icon: <HiCloud className='h-6 text-[#008900] w-6' />,
            title: 'Emission Reduction',
            description: 'Effective strategies to reduce your carbon footprint and meet sustainability goals.',
            imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        }
    ]

    return (
        <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            description={service.description}
                            icon={service.icon}
                            imageUrl={service.imageUrl}
                            title={service.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainServices