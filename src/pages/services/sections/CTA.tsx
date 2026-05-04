import Button from '../../../components/ui/Button'

const CTA = () => {
    return (
        <section className='bg-[#165B13]'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='font-bold mb-3 text-white text-2xl sm:text-3xl md:text-4xl'>
                        Ready to Get Started?
                    </h2>
                    <p className='font-light mb-6 sm:mb-8 text-emerald-100 text-base'>
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