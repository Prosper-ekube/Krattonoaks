import { useParams, useNavigate } from 'react-router-dom'
import { getProjectBySlug } from '../../../data/projectsData'
import Details from './Details'

const DetailsPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()
    const project = getProjectBySlug(slug || '')

    if (!project) {
        navigate('/projects')
        return null
    }

    return <Details project={project} onBack={() => navigate('/projects')} />
}

export default DetailsPage