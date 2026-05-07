import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'greenOutline' | 'whiteOutline'

type ButtonProps = {
    children: ReactNode
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
    disabled?: boolean
}

const Button = ({ children, className = '', onClick, type = 'button', variant = 'primary' }: ButtonProps) => {
    const baseClasses = 'duration-1000 px-6 py-3 rounded-none text-center text-sm tracking-wide transition-colors'

    const variantClasses = {
        primary: 'bg-[#165B13] hover:bg-[#008900] text-white',
        secondary: 'bg-gray-100 hover:bg-[#008900] hover:text-white text-gray-800',
        greenOutline: 'border border-[#165B13] hover:bg-[#008900] text-[#165B13] hover:border-[#008900] hover:text-white',
        whiteOutline: 'border border-white hover:bg-[#008900] hover:border-[#008900] text-white'
    }

    return (
        <motion.button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
            type={type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    )
}

export default Button