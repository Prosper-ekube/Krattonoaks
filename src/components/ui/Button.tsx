import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type ButtonProps = {
    children: ReactNode
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
    disabled?: boolean
}

const Button = ({ children, className = '', onClick, type = 'button', variant = 'primary' }: ButtonProps) => {
    const baseClasses = 'duration-1000 px-6 py-2.5 rounded-md text-center text-sm transition-colors'

    const variantClasses = {
        primary: 'bg-[#165B13] hover:bg-[#008900] text-white',
        secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
        outline: 'border border-emerald-700 hover:bg-emerald-700 text-emerald-700 hover:text-white'
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button