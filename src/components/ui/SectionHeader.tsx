type SectionHeaderProps = {
    eyebrow?: string
    subtitle?: string
    title: string
}

const SectionHeader = ({ eyebrow, subtitle, title }: SectionHeaderProps) => {
    return (
        <div className='mb-8 sm:mb-10 text-center'>
            {eyebrow && (
                <p className='font-light mb-2 text-emerald-600 text-sm tracking-wide uppercase'>
                    {eyebrow}
                </p>
            )}
            <h2 className='font-bold mb-3 text-gray-900 text-2xl sm:text-3xl md:text-4xl'>
                {title}
            </h2>
            {subtitle && (
                <p className='font-light mx-auto max-w-2xl text-gray-600 text-base'>
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader