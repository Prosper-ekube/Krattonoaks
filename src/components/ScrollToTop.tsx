import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const duration = 900 // increase for slower scroll (ms)
        const start = window.scrollY
        const startTime = performance.now()

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            const easedProgress = easeOutCubic(progress)
            const target = start * (1 - easedProgress)

            window.scrollTo(0, target)

            if (progress < 1) {
                requestAnimationFrame(animateScroll)
            }
        }

        requestAnimationFrame(animateScroll)
    }, [pathname])

    return null
}

export default ScrollToTop