import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    HiArrowLeft,
    HiCalendar,
    HiLocationMarker,
    HiSun,
    HiChip,
    HiCloud,
    HiChartBar,
    HiUsers,
    HiCloudDownload,
    HiChevronLeft,
    HiChevronRight
} from 'react-icons/hi'
import Button from '../../../components/ui/Button'
import type { Project } from '../../../data/projectsData'
import Footer from '../../../components/layout/Footer'
import Navbar from '../../../components/layout/Navbar'

type ProjectDetailsProps = {
    project: Project
    onBack: () => void
}

const Details = ({ project, onBack }: ProjectDetailsProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.galleryImages.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length)
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Solar':
                return <HiSun className='h-5 text-[#165B13] w-5' />
            case 'Hybrid':
                return <HiChip className='h-5 text-[#165B13] w-5' />
            case 'Geothermal':
                return <HiCloud className='h-5 text-[#165B13] w-5' />
            case 'Oil and Gas':
                return <HiCloud className='h-5 text-[#165B13] w-5' />
            default:
                return <HiSun className='h-5 text-[#165B13] w-5' />
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Solar':
                return 'bg-yellow-100 text-yellow-700'
            case 'Hybrid':
                return 'bg-blue-100 text-blue-700'
            case 'Geothermal':
                return 'bg-green-100 text-green-700'
            default:
                return 'bg-gray-100 text-gray-700'
        }
    }

    return (
        <>
            <Navbar />
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                className='pt-24 md:pt-32 pb-16 md:pb-24'
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    {/* Back Button */}
                    <button
                        className='flex gap-2 items-center font-light mb-8 text-gray-500 text-sm transition-colors hover:text-[#165B13] group'
                        onClick={onBack}
                    >
                        <HiArrowLeft className='h-4 transition-transform group-hover:-translate-x-1 w-4' />
                        Back to Projects
                    </button>

                    {/* Gallery Section */}
                    <div className='mb-8'>
                        <div className='relative overflow-hidden'>
                            <img
                                alt={project.title}
                                className='h-64 md:h-96 object-cover w-full'
                                src={project.galleryImages[currentImageIndex]}
                            />

                            {/* Navigation Arrows */}
                            {project.galleryImages.length > 1 && (
                                <>
                                    <button
                                        className='absolute bg-black/50 hover:bg-black/70 left-4 p-2 text-white top-1/2 transform -translate-y-1/2 transition-colors'
                                        onClick={prevImage}
                                    >
                                        <HiChevronLeft className='h-5 w-5' />
                                    </button>
                                    <button
                                        className='absolute bg-black/50 hover:bg-black/70 right-4 p-2 text-white top-1/2 transform -translate-y-1/2 transition-colors'
                                        onClick={nextImage}
                                    >
                                        <HiChevronRight className='h-5 w-5' />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {project.galleryImages.length > 1 && (
                            <div className='flex gap-2 mt-3 overflow-x-auto pb-2'>
                                {project.galleryImages.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`flex-shrink-0 overflow-hidden transition-all ${currentImageIndex === index ? 'ring-2 ring-[#165B13] opacity-100' : 'opacity-60 hover:opacity-100'
                                            }`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    >
                                        <img
                                            alt={`${project.title} thumbnail ${index + 1}`}
                                            className='h-16 object-cover w-20'
                                            src={image}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Project Info */}
                    <div className='grid gap-8 lg:grid-cols-3'>
                        {/* Main Content */}
                        <div className='lg:col-span-2'>
                            <div className='flex flex-wrap gap-3 items-center mb-3'>
                                <span className={`font-light px-3 py-1 -full text-sm ${getCategoryColor(project.category)}`}>
                                    {project.category}
                                </span>
                            </div>

                            <h1 className='font-bold mb-4 text-gray-900 text-3xl md:text-4xl'>
                                {project.title}
                            </h1>

                            <div className='flex flex-wrap gap-4 items-center mb-6'>
                                <div className='flex gap-1 items-center'>
                                    <HiLocationMarker className='h-4 text-[#165B13] w-4' />
                                    <span className='font-light text-gray-600 text-sm'>
                                        {project.location}
                                    </span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <HiCalendar className='h-4 text-[#165B13] w-4' />
                                    <span className='font-light text-gray-600 text-sm'>
                                        Completed {project.projectedCompletionDate}
                                    </span>
                                </div>
                            </div>

                            <div className='prose prose-gray max-w-none'>
                                <p className='font-light mb-6 text-gray-600 text-base leading-relaxed'>
                                    {project.description}
                                </p>
                                {project.fullDescription && (
                                    <p className='font-light text-gray-600 text-base leading-relaxed'>
                                        {project.fullDescription}
                                    </p>
                                )}
                            </div>

                            {/* Stats Section */}
                            <div className='bg-gray-50 border border-gray-100 grid gap-6 grid-cols-1 md:grid-cols-3 mt-8 p-6 -lg'>
                                <div className='text-center'>
                                    <HiChartBar className='h-6 mx-auto text-[#165B13] w-6' />
                                    <p className='font-bold mt-2 text-gray-800 text-lg'>
                                        {project.stats.find((stat) => stat.label === 'Projected Annual Energy Output')?.value ?? 'N/A'}
                                    </p>
                                    <p className='font-light text-gray-500 text-xs uppercase tracking-wide'>
                                        Projected Annual Energy Output
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <HiUsers className='h-6 mx-auto text-[#165B13] w-6' />
                                    <p className='font-bold mt-2 text-gray-800 text-lg'>                                        
                                        {project.stats.find((stat) => stat.label === 'Potential Homes Powered')?.value ?? 'N/A'}
                                    </p>
                                    <p className='font-light text-gray-500 text-xs uppercase tracking-wide'>
                                        Potential Homes Powered
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <HiCloudDownload className='h-6 mx-auto text-[#165B13] w-6' />
                                    <p className='font-bold mt-2 text-gray-800 text-lg'>                                        
                                        {project.stats.find((stat) => stat.label === 'Estimated Annual CO₂ Reduction')?.value ?? 'N/A'}
                                    </p>
                                    <p className='font-light text-gray-500 text-xs uppercase tracking-wide'>
                                        Estimated Annual CO₂ Reduction
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial */}
                            {project.testimonial && (
                                <div className='bg-white border border-[#165B13]/20 mt-8 p-6 -lg'>
                                    <p className='font-light italic text-gray-600 text-base'>
                                        "{project.testimonial.quote}"
                                    </p>
                                    <div className='border-t border-gray-100 mt-4 pt-4'>
                                        <p className='font-semibold text-gray-800'>
                                            {project.testimonial.name}
                                        </p>
                                        <p className='font-light text-[#165B13] text-sm'>
                                            {project.testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className='lg:col-span-1'>
                            <div className='bg-gray-50 border border-gray-100 p-6 sticky top-32'>
                                <h3 className='font-semibold mb-4 text-gray-800 text-lg'>
                                    Project Highlights
                                </h3>

                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <p className='font-light mb-1 text-gray-500 text-xs uppercase tracking-wide'>
                                            Category
                                        </p>
                                        <div className='flex gap-2 items-center'>
                                            {getCategoryIcon(project.category)}
                                            <p className='font-medium text-gray-800 text-sm'>
                                                {project.category} Energy
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='font-light mb-1 text-gray-500 text-xs uppercase tracking-wide'>
                                            Location
                                        </p>
                                        <p className='font-medium text-gray-800 text-sm'>
                                            {project.location}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-light mb-1 text-gray-500 text-xs uppercase tracking-wide'>
                                            Completion
                                        </p>
                                        <p className='font-medium text-gray-800 text-sm'>
                                            {project.projectedCompletionDate}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-light mb-1 text-gray-500 text-xs uppercase tracking-wide'>
                                            Status
                                        </p>
                                        <p
                                            className={`font-medium text-sm ${project.projectStatus === 'Commissioning'
                                                    ? 'text-emerald-600'
                                                    : project.projectStatus === 'Implementation'
                                                        ? 'text-blue-600'
                                                        : project.projectStatus === 'Development'
                                                            ? 'text-amber-600'
                                                            : 'text-gray-500'
                                                }`}
                                        >
                                            {project.projectStatus}
                                        </p>
                                    </div>
                                </div>

                                {/* Technical Specifications */}
                                <div className='border-t border-gray-200 mt-6 pt-6'>
                                    <h4 className='font-semibold mb-3 text-gray-800 text-sm'>
                                        Technical Specifications
                                    </h4>
                                    <div className='flex flex-col gap-2'>
                                        {project.technicalSpecs.map((spec, index) => (
                                            <div key={index} className='flex gap-2 justify-between text-sm'>
                                                <span className='font-light text-gray-500'>
                                                    {spec.label}:
                                                </span>
                                                <span className='font-medium text-gray-700'>
                                                    {spec.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='border-t border-gray-200 mt-6 pt-6'>
                                    <Button variant='primary' className='w-full' onClick={() => window.location.href = '/contact'}>
                                        Request Similar Project
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Projects / CTA Section */}
                    <div className='border-t border-gray-100 mt-12 pt-12'>
                        <h2 className='font-bold mb-6 text-gray-900 text-2xl'>
                            Interested in a Similar Project?
                        </h2>
                        <p className='font-light text-gray-500 mb-8 max-w-2xl'>
                            Let's discuss how we can bring the same level of expertise and quality to your energy project.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Button variant='greenOutline' onClick={onBack}>
                                View All Projects
                            </Button>
                            <Button variant='primary' onClick={() => window.location.href = '/contact'}>
                                Contact Our Experts
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default Details