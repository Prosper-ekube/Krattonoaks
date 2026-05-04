import { HiMail, HiPhone } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

type FooterLinkProps = {
    children: string
    to: string
}

const FooterLink = ({ children }: FooterLinkProps) => {
    return (
        <li>
            <span className='font-light text-gray-400 text-sm'>
                {children}
            </span>
        </li>
    )
}

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const navigate = useNavigate()
    return (
        <footer className='bg-gray-950 border-t border-gray-800 mt-auto pt-12 sm:pt-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Main Footer Grid */}
                <div className='grid gap-8 pb-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4'>
                    {/* Brand Column */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-white text-xl tracking-tight'>
                                Kratton<span className='text-[#008900]'>Oaks</span>
                            </h1>
                            <p className='font-light text-gray-400 text-sm'>
                                Effective Solar Energy Solutions
                            </p>
                        </div>
                        <p className='font-light leading-relaxed text-gray-500 text-sm'>
                            Be a part of the green revolution. Save energy. Save cost.
                            Preserve the environment and be a good corporate citizen.
                        </p>
                    </div>

                    {/* Our Services Column */}
                    <div>
                        <h3 className='font-semibold mb-4 text-gray-200 text-lg'>Our Services</h3>
                        <ul className='flex flex-col gap-3'>
                            <FooterLink to='/renewable-energy'>Renewable Energy</FooterLink>
                            <FooterLink to='/digital-optimization'>Digital Optimization</FooterLink>
                            <FooterLink to='/parts-and-maintenance'>Parts & Maintenance</FooterLink>
                            <FooterLink to='/emission-reduction'>Emission Reduction</FooterLink>
                        </ul>
                    </div>

                    {/* Energy Solutions Column */}
                    <div>
                        <h3 className='font-semibold mb-4 text-gray-200 text-lg'>Energy Solutions</h3>
                        <ul className='flex flex-col gap-3'>
                            <FooterLink to='/solar-energy'>Solar Energy</FooterLink>
                            <FooterLink to='/hybrid-energy'>Hybrid Energy</FooterLink>
                            <FooterLink to='/geothermal-energy'>Geothermal Energy</FooterLink>
                        </ul>
                    </div>

                    {/* Get a Quote Column */}
                    <div>
                        <h3 className='font-semibold mb-4 text-gray-200 text-lg'>Get Your Free Quote</h3>
                        <div className='flex flex-col gap-4'>
                            <p className='font-light text-gray-400 text-sm'>
                                We're just a call away
                            </p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-3 items-center'>
                                    <HiPhone className='h-5 text-[#165B13] w-5' />
                                    <a
                                        className='duration-300 font-light text-gray-400 text-sm transition-colors hover:text-[#008900]'
                                        href='tel:+2347061174700'
                                    >
                                        +234 706-117-4700
                                    </a>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <HiMail className='h-5 text-[#165B13] w-5' />
                                    <a
                                        className='duration-300 font-light text-gray-400 text-sm transition-colors hover:text-[#008900]'
                                        href='mailto:info@krattonoaks.com'
                                    >
                                        info@krattonoaks.com
                                    </a>
                                </div>
                            </div>
                            <button onClick={() => navigate('/contact')} className='bg-[#165B13] duration-1000 hover:bg-[#008900] mt-2 px-6 py-2.5 rounded-md text-center text-sm text-white transition-colors'>
                                Contact Our Experts
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800 gap-4 mt-8 pt-8 pb-8'>
                    <p className='font-light order-2 sm:order-1 text-gray-500 text-center text-sm'>
                        © {currentYear} KrattonOaks. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer