import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealOnScrollProps = {
    children: ReactNode
    delay?: number
}

const RevealOnScroll = ({ children, delay = 0 }: RevealOnScrollProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default RevealOnScroll