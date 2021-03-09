import React, { useEffect, useState } from 'react'

import MainLayout from '@layouts/MainLayout'
import Hero from './sections/Hero'
import Red from './sections/Red'
import Yellow from './sections/Yellow'
import Perks from './sections/Perks'
import Reviews from './sections/Reviews'
import { Element, scroller } from "react-scroll";

const sections = [Hero, Red, Yellow, Perks, Reviews]

const LandingPage = () => {
    const [currentSection, setCurrentSection] = useState(0)
    const srollToSection = () => {
        scroller.scrollTo(`section-${currentSection}`, { smooth: true });
    }
    const handleWheel = (event) => {
        setCurrentSection(prevState => {
            let newSection = event.nativeEvent.wheelDelta > 0 ? currentSection - 1 : currentSection + 1
            if (newSection >= 0 && newSection < sections.length) return newSection
            else return prevState
        })
        console.log(currentSection)
    }
    useEffect(srollToSection, [currentSection])
    return (
        <MainLayout onWheel={handleWheel}>
            {sections.map((Component, i) =>
                <Element name={`section-${i}`} key={`landing-section-${i}`}><Component /></Element>
            )}

        </MainLayout>
    )
}

export default LandingPage