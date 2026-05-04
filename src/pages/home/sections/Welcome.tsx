type WelcomeProps = {
    services: Array<{
        number: string
        title: string
    }>
}

const Welcome = ({ services }: WelcomeProps) => {
    return (
        <section className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-8 sm:mb-12 text-center'>
                    <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                        future is here
                    </p>
                    <h2 className='font-bold mb-2 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        Welcome to <span className='text-[#008900]'>Kratton Oaks</span>
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Be a part of the green revolution. Save energy. Save cost.
                        Preserve the environment and be a good corporate citizen
                    </p>
                </div>

                {/* Image and Services Grid */}
                <div className='grid gap-8 lg:grid-cols-2 items-center'>
                    {/* Image Side */}
                    <div className='order-last lg:order-first'>
                        <img
                            alt='Renewable energy solutions for modern living'
                            className='rounded-lg object-cover h-80 md:h-96 shadow-lg w-full'
                            src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                        />
                    </div>

                    {/* Services Side */}
                    <div className='grid gap-4 sm:grid-cols-2'>
                        {services.map((service, index) => (
                            <div key={index} className='bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-center transition-colors'>
                                <div className='font-bold mb-1 text-[#008900] text-xl'>{service.number}</div>
                                <h3 className='font-medium text-gray-800 text-base'>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome