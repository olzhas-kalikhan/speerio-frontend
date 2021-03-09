import React, { useRef, useEffect, useState } from 'react'
import useWindowDimensions from '@utilities/windowDimensionsHook'

const Canvas = props => {
    const { color, children } = props
    const { height, width } = useWindowDimensions()
    const [, setCtx] = useState(null)
    const [mousePressed, setMousePressed] = useState(false)
    const [scale, setScale] = useState({ x: width / 100, y: height / 100 })
    const canvasRef = useRef(null)
    const styles = {
        height: '100vh',
        width,
        position: 'relative',
        top: '-100vh',
        zIndex: 6,
    }

    const drawCircle = (ctx, x, y, radius) => {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
    }
    const drawStaticCircle = (ctx, x, y, radius) => {
        ctx.beginPath()
        ctx.arc(x * scale.x, y * scale.y, radius, 0, Math.PI * 2)
        ctx.fill()
    }
    useEffect(() => {
        setScale(width / 100)
    }, [width])
    useEffect(() => {
        setCtx(ctx => {
            const canvas = canvasRef.current
            ctx = canvas.getContext('2d')
            ctx.canvas.width = width
            ctx.canvas.height = height
            ctx.fillStyle = color;
            ctx.rect(0, 0, width, height)
            ctx.fill()
            ctx.globalCompositeOperation = 'destination-out';
            drawStaticCircle(ctx, 10, 0, 300)
            drawStaticCircle(ctx, 62, 30, 200)
            drawStaticCircle(ctx, 50, 50, 150)
            drawStaticCircle(ctx, 80, 40, 160)
            return ctx
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleMouseMove = (e) => {
        if (mousePressed) {
            let posX = e.pageX - e.target.offsetLeft - 20, posY = e.pageY - e.target.offsetTop + 40
            setCtx(ctx => {
                drawCircle(ctx, posX, posY, width * 0.10)
                return ctx
            })
        }
    }
    const handleMouseDown = (e) => setMousePressed(true)
    const handleMouseUp = (e) => setMousePressed(false)

    return (
        <canvas
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            ref={canvasRef}
            style={styles}
            {...props}
        >
            {children}
        </canvas>
    )
}

export default Canvas