import Button from '../../../components/ui/Button'

const CTA = () => {
    return (
        <section className='relative bg-gray-900'>
            {/* Background Image */}
            <div
                className='absolute bg-cover bg-center bg-no-repeat h-full inset-0 opacity-20 w-full'
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                }}
            />

            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='font-bold mb-3 text-white text-2xl sm:text-3xl md:text-4xl'>
                        Ready to Join the Green Revolution?
                    </h2>
                    <p className='font-light mb-6 sm:mb-8 text-gray-200 text-base'>
                        Get your instant free quote today. We're just a call away.
                    </p>
                    <Button variant='outline' className='border-white text-white hover:bg-white hover:text-emerald-700'>
                        Contact Our Experts
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CTA