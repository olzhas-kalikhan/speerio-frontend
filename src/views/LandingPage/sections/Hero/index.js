import { useEffect, useState } from 'react'
import herobg1 from '@assets/LandingPage/Image1.png'
import herobg2 from '@assets/LandingPage/Image2.png'
import herobg3 from '@assets/LandingPage/Image3.png'
import heroTransition1 from '@assets/LandingPage/heroTransition1.gif'
import heroTransition2 from '@assets/LandingPage/heroTransition2.gif'
import heroTransition3 from '@assets/LandingPage/heroTransition3.gif'
import { Container } from '@components/Container'
import { ButtonTry } from '@components/buttons/Buttons'
import { Title, Subtitle } from '@components/Titles'
const backgrounds = [herobg1, herobg2, herobg3]
const transitions = [heroTransition1, heroTransition2, heroTransition3]
const Hero = ({ sectionId }) => {

    const [currentBackground, setCurrentBackground] = useState()

    useEffect(() => {
        let i = 0;
        const updateBackground = () => {
            setCurrentBackground(transitions[i])
            setTimeout(() => {
                setCurrentBackground(backgrounds[i])
                i = i + 1 < 3 ? i + 1 : 0
            }, 1500)

        }
        updateBackground()
        const interval = setInterval(updateBackground, 10000);

        return () => {
            clearInterval(interval)
        };
    }, []);
    return (

        <Container bgImage={currentBackground} id={sectionId}  >
            <Title shadow>INTERACTIVE CONCERT EXPERIENCE</Title>
            <Subtitle shadow>Experience your favourite artists like never before and from the comfort of your own home.</Subtitle>
            <ButtonTry>TRY IT NOW</ButtonTry>
        </Container>


    )
}
export default Hero