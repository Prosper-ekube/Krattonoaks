import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from '../../../components/ui/RevealOnScroll'

type Project = {
    category: string
    description: string
    imageUrl: string
    location: string
    title: string
}

const Grid = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const projects: Project[] = [
        {
            title: 'Gwoza Solar',
            category: 'Solar',
            location: 'Borno, Nigeria',
            description: 'Stretching across acres of sun-soaked land, the Borno Solar Power Project is an awe-inspiring sight. Rows of sleek solar panels, meticulously positioned, harness the abundant solar energy that graces Gwoza.',
            imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format',
        },
        {
            title: 'Edemba Solar',
            category: 'Solar',
            location: 'Ebonyi, Nigeria',
            description: 'The Ebonyi Solar Homes project in Edemba, led by Kratton Oaks, delivers clean solar energy while promoting environmental sustainability, job creation, and economic growth, positioning the community as a leader in renewable energy development.',
            imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format'
        },        
        {
            title: 'Nkabo Solar Farm',
            category: 'Solar',
            location: 'Zamfara, Nigeria',
            description: 'The Nkabom Solar Farm in Zamfara State, led by Kratton Oaks, provides clean solar energy while supporting environmental sustainability, job creation, and economic growth, helping position the community as a model for renewable energy development and innovation.',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXJ8ZW58MHx8MHx8fDA%3D'
        }
    ]

    const filters = ['All', 'Solar', 'Hybrid', 'Geothermal']
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <RevealOnScroll>
            <section className='bg-gray-50 py-16 md:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    {/* Filter Buttons */}
                    <div className='flex flex-wrap gap-3 justify-center mb-12'>
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={[
                                    'duration-300 px-5 py-2 text-sm tracking-wide transition-colors',
                                    activeFilter === filter
                                        ? 'bg-[#165B13] text-white'
                                        : 'bg-white hover:bg-[#008900] hover:text-white text-gray-600'
                                ].join(' ')}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid with Animation */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeFilter}
                            animate={{ opacity: 1, y: 0 }}
                            className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
                            exit={{ opacity: 0, y: 20 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    className='bg-white hover:shadow-lg overflow-hidden transition-all hover:border-[#165B13] border border-transparent'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className='overflow-hidden h-56'>
                                        <img
                                            alt={project.title}
                                            className='grayscale hover:grayscale-0 h-full object-cover transition-all duration-1000 w-full'
                                            loading='lazy'
                                            src={project.imageUrl}
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <div className='flex gap-2 items-center justify-between mb-2'>
                                            <h3 className='font-semibold text-gray-800 text-lg'>{project.title}</h3>
                                            <span className='bg-[#165B13]/10 font-light px-2 py-1 text-[#165B13] text-xs'>
                                                {project.category}
                                            </span>
                                        </div>
                                        <p className='font-light mb-2 text-gray-500 text-sm flex items-center gap-1'>{project.location}</p>
                                        <p className='font-light text-gray-600 text-sm'>{project.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className='py-20 text-center'>
                            <p className='font-light text-gray-500 text-lg'>No projects currently</p>
                        </div>
                    )}
                </div>
            </section>
        </RevealOnScroll>
    )
}

export default Grid