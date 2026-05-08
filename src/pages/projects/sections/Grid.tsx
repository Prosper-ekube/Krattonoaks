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
            imageUrl: 'https://img.magnific.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?uid=R137436713&ga=GA1.1.561032470.1777918282&semt=ais_hybrid&w=740&q=80'
        },
        {
            title: 'Kaduna Smart Grid Initiative',
            category: 'Hybrid',
            location: 'Kaduna, Nigeria',
            imageUrl: 'https://img.magnific.com/free-photo/sun-setting-silhouette-electricity-pylons_1127-2977.jpg',
            description: 'Blending solar and backup energy technologies, the Kaduna Smart Grid Initiative delivers reliable and sustainable electricity solutions for growing residential and commercial communities.'
        },
        {
            title: 'Nsukka Geothermal Station',
            category: 'Geothermal',
            location: 'Enugu, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2012/11/28/09/18/power-plant-67538_1280.jpg',
            description: 'Harnessing underground thermal resources, the Nsukka Geothermal Station provides stable renewable energy while promoting environmentally responsible power generation.'
        },
        {
            title: 'Lekki Solar Estate',
            category: 'Solar',
            location: 'Lagos, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/06/23/21/17/solar-1476224_960_720.jpg',
            description: 'Spanning modern residential districts, the Lekki Solar Estate project utilizes high-efficiency solar panels to deliver clean and dependable electricity to homes and businesses.'
        },
        {
            title: 'Jos Renewable Energy Hub',
            category: 'Hybrid',
            location: 'Plateau, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2022/01/10/15/29/wind-mills-6928590_1280.jpg',
            description: 'The Jos Renewable Energy Hub combines multiple renewable technologies to ensure uninterrupted energy supply while reducing dependence on fossil fuels.'
        },
        {
            title: 'Abeokuta Green Energy Project',
            category: 'Hybrid',
            location: 'Ogun, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2021/12/26/14/45/sunset-6895334_1280.jpg',
            description: 'Positioned across expansive open fields, the Abeokuta Green Energy Project captures abundant sunlight to provide efficient and eco-friendly energy solutions.'
        },
        {
            title: 'Makurdi Thermal Energy Facility',
            category: 'Geothermal',
            location: 'Benue, Nigeria',
            imageUrl: 'https://img.magnific.com/free-photo/green-grass-field-near-power-plant-sunset_395237-52.jpg?uid=R137436713&ga=GA1.1.561032470.1777918282&semt=ais_hybrid&w=740&q=80',
            description: 'Designed to tap into natural underground heat systems, the Makurdi Thermal Energy Facility delivers sustainable geothermal energy for industrial and residential use.'
        },
        {
            title: 'Asaba Hybrid Power Network',
            category: 'Hybrid',
            location: 'Delta, Nigeria',
            imageUrl: 'https://img.magnific.com/free-photo/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai_188544-36908.jpg?uid=R137436713&ga=GA1.1.561032470.1777918282&semt=ais_hybrid&w=740&q=80',
            description: 'Integrating solar infrastructure with advanced storage systems, the Asaba Hybrid Power Network ensures reliable electricity distribution across key communities.'
        },
        {
            title: 'Uyo Solar Expansion Project',
            category: 'Solar',
            location: 'Akwa Ibom, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg',
            description: 'Featuring rows of advanced photovoltaic panels, the Uyo Solar Expansion Project supports cleaner energy consumption and long-term environmental sustainability.'
        },
        {
            title: 'Minna Geothermal Plant',
            category: 'Geothermal',
            location: 'Niger State, Nigeria',
            imageUrl: 'https://img.magnific.com/premium-photo/geothermal-power-station-iceland_70898-6996.jpg?w=360',
            description: 'The Minna Geothermal Plant transforms naturally occurring underground heat into dependable renewable energy for nearby industries and households.'
        },
        {
            title: 'Ibadan Clean Energy Initiative',
            category: 'Hybrid',
            location: 'Oyo, Nigeria',
            imageUrl: 'https://img.magnific.com/premium-photo/geothermal-pumping-station-off-road_665346-81511.jpg?uid=R137436713&ga=GA1.1.561032470.1777918282&semt=ais_hybrid&w=740&q=80',
            description: 'Combining renewable energy sources for enhanced efficiency, the Ibadan Clean Energy Initiative powers urban development with reliable sustainable solutions.'
        },
        {
            title: 'Yola Solar Energy Farm',
            category: 'Solar',
            location: 'Adamawa, Nigeria',
            imageUrl: 'https://img.magnific.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg?uid=R137436713&ga=GA1.1.561032470.1777918282&semt=ais_hybrid&w=740&q=80',
            description: 'Stretching across wide landscapes, the Yola Solar Energy Farm captures the region\'s intense sunlight to generate affordable and environmentally friendly power.'
        },
        {
            title: 'Lokoja Sustainable Power Project',
            category: 'Hybrid',
            location: 'Kogi, Nigeria',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXJ8ZW58MHx8MHx8fDA%3D',
            description: 'The Lokoja Sustainable Power Project integrates renewable systems and smart energy management technologies to improve energy accessibility and efficiency.'
        },
        {
            title: 'Abakaliki Geothermal Development',
            category: 'Geothermal',
            location: 'Ebonyi, Nigeria',
            imageUrl: 'https://img.magnific.com/premium-photo/landscape-with-nuclear-power-dukovany-czech-republic-europe-natural-ecological-background_604451-645.jpg',
            description: 'Built around innovative geothermal technology, the Abakaliki Geothermal Development delivers clean energy while supporting regional economic growth.'
        },
        {
            title: 'Ilorin Solar Infrastructure Project',
            category: 'Solar',
            location: 'Kwara, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/08/14/16/00/solar-8190270_1280.jpg',
            description: 'Strategically installed solar arrays across Ilorin provide consistent renewable energy while reducing environmental impact and operational costs.'
        },
        {
            title: 'Owerri Hybrid Energy Complex',
            category: 'Hybrid',
            location: 'Imo, Nigeria',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/03/29/17/23/solarpark-1288842_1280.jpg',
            description: 'The Owerri Hybrid Energy Complex combines modern renewable technologies to deliver stable, efficient, and environmentally conscious energy solutions.'
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