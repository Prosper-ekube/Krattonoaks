import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../../../data/projectsData'

const Grid = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const navigate = useNavigate()

    const projects = projectsData

    const createSlug = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }

    const handleCardClick = (project: typeof projects[0]) => {
        const slug = createSlug(project.title)
        navigate(`/projects/${slug}`)
    }

    const filters = ['All', 'Solar', 'Hybrid', 'Geothermal']
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' as const}
        }
    }

    return (
        <section className='bg-gray-50 py-16 md:py-24'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                {/* Filter Buttons - No animation, always visible */}
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

                {/* Projects Grid with Scroll-Triggered Animation */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeFilter}
                        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={containerVariants}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className='bg-white hover:shadow-lg overflow-hidden transition-all hover:border-[#165B13] border border-transparent cursor-pointer'
                                onClick={() => handleCardClick(project)}
                                variants={itemVariants}
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
                                    <p className='font-light text-gray-600 text-sm line-clamp-2'>{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <div className='py-20 text-center'>
                        <p className='font-light text-gray-500 text-lg'>No projects found</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Grid