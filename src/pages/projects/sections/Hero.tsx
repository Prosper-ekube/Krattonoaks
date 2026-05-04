const Hero = () => {
    return (
        <section className='relative bg-gray-900 pt-24 sm:pt-28 md:pt-32'>
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-30 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='mb-3 text-[#008900] text-sm tracking-wide uppercase'>
                        our work
                    </p>
                    <h1 className='font-bold mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl'>
                        Our Experience Around the Globe
                    </h1>
                    <p className='font-light text-gray-200 text-base sm:text-lg'>
                        Our team of experts are available to bring the solution you yearn for to your doorstep.
                        Borders have never been a challenge.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero