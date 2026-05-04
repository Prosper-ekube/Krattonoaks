import { HiMenu, HiX, HiSun, HiSparkles } from 'react-icons/hi'
import { useNavigate,NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import krattonoaks_logo from '../../assets/images/KrattonOaks logo.png'

type NavItemProps = {
    children: string
    onClick?: () => void
    to: string
}

const NavItem = ({ children, onClick, to }: NavItemProps) => {
    const activeClasses = 'text-[#165B13]'
    const baseClasses = 'duration-300 font-medium text-gray-700 transition-colors hover:text-[#008900]'
    const inactiveClasses = ''

    return (
        <li>
            <NavLink
                className={({ isActive }) => [baseClasses, isActive ? activeClasses : inactiveClasses].join(' ')}
                onClick={onClick}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    )
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const navigate = useNavigate()

    return (
        <nav className='bg-white/90 backdrop-blur-md border-b border-emerald-100/50 fixed left-0 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 top-0 w-full z-50'>
            <div className='flex items-center justify-between mx-auto max-w-7xl'>
                {/* Logo / Branding */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    <div>
                        <img className='w-28' src={krattonoaks_logo} />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden gap-5 lg:gap-8 md:flex'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/about'>About</NavItem>
                    <NavItem to='/services'>Services</NavItem>
                    <NavItem to='/projects'>Projects</NavItem>                    
                    <NavItem to='/contact'>Contact</NavItem>
                </ul>

                {/* Desktop CTA Button */}
                <div className='hidden md:block'>
                    <button onClick={() => navigate('/contact')} className='bg-[#165B13] hover:bg-[#008900] px-5 py-2 rounded-md text-sm text-white transition-all shadow-sm hover:shadow-md'>
                        Get Free Quote
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className='md:hidden p-1 text-emerald-800 hover:text-emerald-600'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={[
                    'bg-white/98 backdrop-blur-sm duration-500 h-0 left-0 md:hidden opacity-0 overflow-hidden pointer-events-none transition-all',
                    isOpen && 'h-screen opacity-100 pointer-events-auto'
                ].join(' ')}
            >
                <ul className='flex flex-col gap-5 px-5 pt-8'>
                    <NavItem onClick={() => setIsOpen(false)} to='/'>Home</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/about'>About</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/services'>Services</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/projects'>Projects</NavItem>
                    <NavItem onClick={() => setIsOpen(false)} to='/contact'>Contact</NavItem>

                    <div className='border-t border-emerald-100 pt-6'>
                        <button onClick={() => navigate('/contact')} className='bg-[#165B13] hover:bg-emerald-800 px-6 py-2.5 rounded-md text-center text-sm text-white transition-colors w-full'>
                            Get Free Quote
                        </button>
                    </div>

                    <div className='flex gap-3 items-center justify-center pt-4 text-[#008900]'>
                        <HiSun className='h-4 w-4' />
                        <HiSparkles className='h-4 w-4' />
                        <span className='text-gray-500 text-xs'>Clean Energy</span>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar