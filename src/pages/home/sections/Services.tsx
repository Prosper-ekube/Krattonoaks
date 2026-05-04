import solar_engineer from '../../../assets/images/solar engineer.png'

type Service = {
    description: string
    title: string
}

type ServicesSectionProps = {
    services: Service[]
}

const Services = ({ services }: ServicesSectionProps) => {
    return (
        <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-8 sm:mb-12 text-center'>
                    <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                        what we offer
                    </p>
                    <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        Our Green Power Services
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Embrace the limitless potential of green power with our comprehensive range of energy services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid gap-8 md:grid-cols-2'>
                    {services.map((service, index) => (
                        <div key={index} className='bg-white hover:shadow-lg overflow-hidden rounded-lg shadow-sm transition-shadow'>
                            <img
                                alt={service.title}
                                className='h-56 object-cover w-full'
                                src={index === 0
                                    ? 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
                                    : solar_engineer
                                }
                            />
                            <div className='p-6'>
                                <h3 className='font-semibold mb-2 text-gray-800 text-xl'>{service.title}</h3>
                                <p className='font-light text-gray-600 text-base'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services