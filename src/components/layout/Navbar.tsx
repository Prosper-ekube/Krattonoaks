import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import krattonoaks_logo from '../../assets/images/kratton-oaks-logo.png'

type NavItemProps = {
    children: string
    onClick?: () => void
    to: string
}

const NavItem = ({ children, onClick, to }: NavItemProps) => {
    return (
        <li className='relative'>
            <NavLink
                className={({ isActive }: NavLinkRenderProps) => `
                    duration-300 font-light relative text-gray-700 text-sm tracking-wide transition-colors hover:text-[#008900]
                    ${isActive ? 'text-[#165B13]' : ''}
                `}
                onClick={onClick}
                to={to}
            >
                {({ isActive }) => (
                    <>
                        {children}

                        {isActive && (
                            <motion.span
                                animate={{ width: '100%' }}
                                className='absolute -bottom-1 bg-[#165B13] h-[1px] left-0'
                                initial={{ width: '0%' }}
                                layoutId={`activeNav-${to}`}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </>
                )}
            </NavLink>
        </li>
    )
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <nav className='bg-white/90 backdrop-blur-sm border-b border-gray-100 fixed left-0 px-6 lg:px-8 py-1 md:py-5 top-0 w-full z-50'>
                <div className='flex items-center justify-between mx-auto max-w-7xl'>

                    {/* Logo / Branding (NOW CLICKABLE) */}
                    <img
                        alt='Kratton Oaks Logo'
                        className='cursor-pointer w-24'
                        src={krattonoaks_logo}
                        onClick={() => navigate('/')}
                    />

                    {/* Desktop Navigation */}
                    <ul className='hidden gap-8 md:flex'>
                        {navItems.map((item) => (
                            <NavItem key={item.path} to={item.path}>
                                {item.label}
                            </NavItem>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className='hidden md:block'>
                        <Button
                            onClick={() => navigate('/contact#contact-form')}
                            variant='greenOutline'
                        >
                            Free Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className='md:hidden p-1 text-gray-700 hover:text-[#008900]'
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        animate={{ opacity: 1 }}
                        className='bg-white fixed inset-0 md:hidden overflow-y-auto pt-24 px-6 z-40'
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className='flex flex-col gap-6'>
                            {navItems.map((item) => (
                                <NavItem
                                    key={item.path}
                                    onClick={() => setIsOpen(false)}
                                    to={item.path}
                                >
                                    {item.label}
                                </NavItem>
                            ))}

                            <li className='pt-4'>
                                <Button
                                    className='w-full'
                                    onClick={() => {
                                        navigate('/contact#contact-form')
                                        setIsOpen(false)
                                    }}
                                    variant='primary'
                                >
                                    Get Free Quote
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar