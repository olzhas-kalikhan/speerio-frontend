import styled from 'styled-components'
import { Container, ScreenWrapper } from '@components/Container'
import bgImg from '@assets/LandingPage/Image4.png'
import Canvas from '@components/Canvas'
import { Title, Subtitle2 } from '@components/Titles'

const Section = styled.div`
    width: ${({ width }) => width};
    margin-left: 40%;
`

const Yellow = ({ sectionId }) => {
    return (
        <Container bgImage={bgImg} id={sectionId}>
            <ScreenWrapper>
                <Section width='60%' >
                    <Title shadow>FRONT ROW SEATS</Title>
                    <Subtitle2 color='#000000' shadow> Experience concerts up close and personal.</Subtitle2>
                </Section>
                <Canvas color='#FFB33F' />
            </ScreenWrapper>

        </Container>
    )
}
export default Yellow