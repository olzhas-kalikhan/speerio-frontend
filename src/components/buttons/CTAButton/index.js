import { useRef, useState } from 'react'
import './styles.css'

const CTAButton = ({ color, small, children }) => {
    const ctaRef = useRef()
    const [mousePosition, setMousePosition] = useState({ x: '', y: '' })
    const [mouseHover, setMouseHover] = useState(false)
    const handleMouseMove = (e) => {
        let posX = e.pageX - e.target.offsetLeft, posY = e.pageY - e.target.offsetTop
        setMousePosition({ x: posX, y: posY })
    }
    const handleMouseEnter = () => {
        setMouseHover(true)
    }
    const handleMouseLeave = () => {
        setMouseHover(false)
    }

    const styles = {
        color,
        width: small && '25%',
        height: small && '8%'
    }
    const hoverStyles = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(94,51,209,1) 10%, rgba(31,225,233,1) 90%)`,
        color: '#FFFFFF',
    }
    return (
        <button
            className='cta-button'
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={mouseHover ? hoverStyles : styles}
        >
            {children}
        </button>
    )

}
export default CTAButton