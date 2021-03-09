import React, { useRef, useEffect, useState } from 'react'
import useWindowDimensions from '@utilities/windowDimensionsHook'

const Canvas = props => {
    const { color, children } = props
    const { height, width } = useWindowDimensions()
    const [ctx, setCtx] = useState()
    const [mousePressed, setMousePressed] = useState(false)
    const canvasRef = useRef(null)
    const styles = {
        height: '100vh',
        width,
        position:'relative',
        top: '-394px',
        
    }

    useEffect(() => {
        console.log(width, height)
        setCtx(ctx => {
            const canvas = canvasRef.current
            ctx = canvas.getContext('2d')
            ctx.canvas.width = width
            ctx.canvas.height = height

            ctx.fillStyle = color;
            ctx.rect(0, 0, width, height)
            ctx.fill()
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath()
            ctx.arc(200, 0, 300, 0, Math.PI * 2)
            ctx.fill()
            ctx.beginPath()
            ctx.arc(900, 200, 200, 0, Math.PI * 2)
            ctx.fill()
            ctx.beginPath()
            ctx.arc(700, 300, 100, 0, Math.PI * 2)
            ctx.fill()
            ctx.beginPath()
            ctx.arc(800, 600, 200, 0, Math.PI * 2)
            ctx.fill()
            return ctx
        })



    }, [])

    const handleMouseMove = (e) => {
        if (mousePressed) {
            let posX = e.pageX - e.target.offsetLeft - 20, posY = e.pageY - e.target.offsetTop + 40

            setCtx(ctx => {
                ctx.beginPath()
                ctx.arc(posX, posY, width * 0.10, 0, Math.PI * 2);
                ctx.fill()
                return ctx
            })
        }
    }
    const handleMouseDown = (e) => setMousePressed(true)
    const handleMouseUp = (e) => setMousePressed(false)

    return <canvas
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={canvasRef}
        style={styles}
        {...props}
    >{children}</canvas>
}

export default Canvas