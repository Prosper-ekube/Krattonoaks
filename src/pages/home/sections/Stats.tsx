import globe from '../../../assets/images/globe.jpg'

type Stat = {
    label: string
    percentage: number
}

type StatsSectionProps = {
    stats: Stat[]
}

const Stats = ({ stats }: StatsSectionProps) => {
    return (
        <section className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-8 sm:mb-12 text-center'>
                    <p className='font-light mb-2 text-[#008900] text-sm tracking-wide uppercase'>
                        green power
                    </p>
                    <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                        Our Experience Around the Globe
                    </h2>
                    <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                        Our team of experts are available to bring the solution you yearn for to your door step.
                        Borders have never been a challenge. Our passion revolves around solving energy problems.
                    </p>
                </div>

                {/* Stats Grid with Image */}
                <div className='grid gap-8 lg:grid-cols-2 items-center'>
                    {/* Stats Side */}
                    <div className='flex flex-col gap-6'>
                        {stats.map((stat, index) => (
                            <div key={index} className='bg-gray-50 p-6 rounded-lg'>
                                <div className='flex gap-4 items-center justify-between'>
                                    <span className='font-medium text-gray-800 text-lg'>{stat.label}</span>
                                    <span className='font-bold text-[#165B13] text-2xl'>{stat.percentage}%</span>
                                </div>
                                <div className='bg-gray-200 h-2 mt-3 rounded-full'>
                                    <div
                                        className='bg-[#165B13] h-2 rounded-full'
                                        style={{ width: `${stat.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Side */}
                    <div>
                        <img
                            alt='Global renewable energy expertise'
                            className='rounded-lg object-cover h-80 md:h-96 shadow-lg w-full'
                            src={globe}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats