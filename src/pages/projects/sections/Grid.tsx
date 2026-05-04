import { useState } from 'react'
import Filter from './Filter'

type Project = {
    category: string
    description: string
    imageUrl: string
    location: string
    title: string
}

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='bg-white border border-gray-100 hover:shadow-lg overflow-hidden rounded-lg transition-shadow group'>
            <div className='relative overflow-hidden h-64'>
                <img
                    alt={project.title}
                    className='duration-500 group-hover:scale-105 h-full object-cover transition-transform w-full'
                    src={project.imageUrl}
                />
                <div className='absolute bg-[#008900] bottom-3 left-3 px-2 py-1 rounded text-white text-xs'>
                    {project.category}
                </div>
            </div>
            <div className='p-6'>
                <h3 className='font-semibold mb-1 text-gray-800 text-lg'>{project.title}</h3>
                <p className='font-light mb-2 text-gray-500 text-sm flex items-center gap-1'>{project.location}</p>
                <p className='font-light text-gray-600 text-sm'>{project.description}</p>
            </div>
        </div>
    )
}

const Grid = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const projects: Project[] = [
        {
            title: 'Green Valley Solar Farm',
            category: 'Solar',
            location: 'California, USA',
            description: '100MW solar installation powering over 15,000 homes.',
            imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Highland Wind Project',
            category: 'Hybrid',
            location: 'Texas, USA',
            description: 'Hybrid wind-solar system with 85% efficiency rating.',
            imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Iceland Geothermal Plant',
            category: 'Geothermal',
            location: 'Reykjavik, Iceland',
            description: 'Sustainable geothermal heating for residential complexes.',
            imageUrl: 'src/assets/images/geothermal 2.jpg'
        },
        {
            title: 'Desert Sun Initiative',
            category: 'Solar',
            location: 'Nevada, USA',
            description: 'Large-scale solar array with battery storage system.',
            imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Coastal Hybrid Project',
            category: 'Hybrid',
            location: 'Oregon, USA',
            description: 'Combined wind, solar, and tidal energy solutions.',
            imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        },
        {
            title: 'Urban Geothermal Network',
            category: 'Geothermal',
            location: 'New York, USA',
            description: 'Downtown district heating using geothermal technology.',
            imageUrl: 'src/assets/images/geothermal 3.jpg'
        }
    ]

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <Filter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                {filteredProjects.length === 0 ? (
                    <div className='py-20 text-center'>
                        <p className='font-light text-gray-500 text-lg'>No projects found</p>
                    </div>
                ) : (
                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default  Grid