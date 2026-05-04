type EnergyTypeProps = {
    description: string
    percentage: number
    title: string
}

const EnergyTypes = () => {
    const energyTypes = [
        {
            title: 'Solar Energy',
            percentage: 88,
            description: 'Harness the abundant power of the sun with our cutting-edge solar solutions.',
            imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Hybrid Energy',
            percentage: 83,
            description: 'Combine solar and wind power for maximum efficiency and reliability.',
            imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Geothermal Energy',
            percentage: 74,
            description: 'Tap into the earth\'s natural heat for consistent, reliable energy.',
            imageUrl: 'src/assets/images/geothermal.jpg'
        }
    ]

    return (
        <section className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mb-10 text-center'>
                    <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        Our Energy Solutions
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Proven expertise across multiple renewable energy technologies
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-3'>
                    {energyTypes.map((type, index) => (
                        <div key={index} className='bg-gray-50 hover:shadow-lg overflow-hidden rounded-lg transition-shadow'>
                            <img
                                alt={type.title}
                                className='h-48 object-cover w-full'
                                src={type.imageUrl}
                            />
                            <div className='p-6'>
                                <div className='flex gap-3 items-baseline justify-between mb-3'>
                                    <h3 className='font-semibold text-gray-800 text-xl'>{type.title}</h3>
                                    <span className='font-bold text-[#165B13] text-2xl'>{type.percentage}%</span>
                                </div>
                                <div className='bg-gray-200 h-2 rounded-full'>
                                    <div
                                        className='bg-[#165B13] h-2 rounded-full'
                                        style={{ width: `${type.percentage}%` }}
                                    />
                                </div>
                                <p className='font-light mt-3 text-gray-600 text-sm'>{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EnergyTypes