const Hero = () => {
    return (
        <section className='relative bg-gray-900 pt-24 sm:pt-28 md:pt-32'>
            {/* Background Image */}
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-30 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='mb-3 text-[#008900] text-sm tracking-wide uppercase'>
                        about kratton oaks
                    </p>
                    <h1 className='font-bold mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl'>
                        Powering a Sustainable Future
                    </h1>
                    <p className='font-light text-gray-200 text-base sm:text-lg'>
                        We're on a mission to bring effective solar energy solutions to homes and
                        businesses worldwide, making green energy accessible for everyone.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero