import globe_2 from '../../../assets/images/globe-b.jpg'

const GlobalPresence = () => {
    return (
        <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mb-10 text-center'>
                    <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                        global expertise
                    </p>
                    <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        Our Experience Around the Globe
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Our team of experts are available to bring the solution you yearn for to your doorstep.
                        Borders have never been a challenge.
                    </p>
                </div>

                <div className='grid gap-8 lg:grid-cols-2 items-center'>
                    {/* Image side */}
                    <div className='order-last lg:order-first'>
                        <img
                            alt='World map showing global energy solutions coverage'
                            className='object-cover h-64 md:h-96 shadow-lg w-full'
                            src={globe_2}
                        />
                    </div>

                    {/* Stats side */}
                    <div className='flex flex-col gap-6 sm:flex-row lg:flex-col'>
                        <div className='bg-white flex-1 p-4 text-center shadow-sm'>
                            <div className='font-bold mb-1 text-[#008900] text-3xl sm:text-4xl'>88%</div>
                            <p className='font-medium text-gray-800'>Solar Energy</p>
                        </div>
                        <div className='bg-white flex-1 p-4 text-center shadow-sm'>
                            <div className='font-bold mb-1 text-[#008900] text-3xl sm:text-4xl'>83%</div>
                            <p className='font-medium text-gray-800'>Hybrid Energy</p>
                        </div>
                        <div className='bg-white flex-1 p-4 text-center shadow-sm'>
                            <div className='font-bold mb-1 text-[#008900] text-3xl sm:text-4xl'>74%</div>
                            <p className='font-medium text-gray-800'>Geothermal Energy</p>
                        </div>
                        <div className='bg-white flex-1 p-4 text-center shadow-sm'>
                            <div className='font-bold mb-1 text-[#008900] text-3xl sm:text-4xl'>72%</div>
                            <p className='font-medium text-gray-800'>Oil and Gas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalPresence