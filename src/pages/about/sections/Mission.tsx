import { HiSun, HiGlobeAlt, HiChartBar } from 'react-icons/hi'

const Mission = () => {
    return (
        <section className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 md:grid-cols-2 md:gap-16 items-center'>
                    <div>
                        <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                            our mission
                        </p>
                        <h2 className='font-bold mb-4 text-gray-900 text-2xl sm:text-3xl'>
                            Be a part of the green revolution
                        </h2>
                        <p className='font-light mb-4 text-gray-600 text-base leading-relaxed'>
                            Save energy. Save cost. Preserve the environment and be a good corporate citizen.
                        </p>
                        <p className='font-light text-gray-600 text-base leading-relaxed'>
                            Our passion revolves around solving energy problems. We believe that
                            sustainable energy should be accessible to everyone, regardless of location
                            or circumstance.
                        </p>

                        <div className='flex flex-col gap-4 mt-6'>
                            <div className='flex gap-4 items-center'>
                                <div className='bg-emerald-100 p-2 rounded-full'>
                                    <HiSun className='h-5 text-[#008900] w-5' />
                                </div>
                                <span className='font-light text-gray-700 text-sm'>Clean Energy Solutions</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='bg-emerald-100 p-2 rounded-full'>
                                    <HiGlobeAlt className='h-5 text-[#008900] w-5' />
                                </div>
                                <span className='font-light text-gray-700 text-sm'>Global Reach</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='bg-emerald-100 p-2 rounded-full'>
                                    <HiChartBar className='h-5 text-[#008900] w-5' />
                                </div>
                                <span className='font-light text-gray-700 text-sm'>Cost Savings</span>
                            </div>
                        </div>
                    </div>

                    <div className='order-first md:order-last'>
                        <img
                            alt='Solar panels on rooftop during sunset'
                            className='rounded-lg object-cover h-80 md:h-96 shadow-lg w-full'
                            src='https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission