import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Projects from '../pages/projects/Projects'
import DetailsPage from '../pages/projects/sections/DetailsPage'
import Contact from '../pages/contact/Contact'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:slug' element={<DetailsPage />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes