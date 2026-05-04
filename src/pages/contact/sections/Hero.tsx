const Hero = () => {
    return (
        <section className='relative bg-gray-900 pt-24 sm:pt-28 md:pt-32'>
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-30 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1554306274-f23838d4a87d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='mb-3 text-[#008900] text-sm tracking-wide uppercase'>
                        get in touch
                    </p>
                    <h1 className='font-bold mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl'>
                        We're Just a Call Away
                    </h1>
                    <p className='font-light text-gray-200 text-base sm:text-lg'>
                        At no cost to you, get in touch and know exactly what you need
                        to get that energy powered solution that caters to your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero