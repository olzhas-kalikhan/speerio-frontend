import { Container, ScreenWrapper } from '@components/Container'
import imgSpeaker1 from '@assets/LandingPage/mediumSpeaker1.png'
import imgSpeaker2 from '@assets/LandingPage/mediumSpeaker2.png'
import { Title, Subtitle2 } from '@components/Titles'
import audioFile from '@assets/audio/bensound-onceagain.mp3'
import { useEffect, useState } from 'react'
import { LeftSection, RightSection, Image, MusicButton } from './styles'
import CTAButton from '@components/buttons/CTAButton'
const Red = ({ sectionId }) => {
    let source;
    const [audioOn, setAudioOn] = useState(false)
    const [audioControls, setAudioControls] = useState({ playAudio: null, stopAudio: null })
    const initAudio = () => {
        let audioContext = new AudioContext()
        source = audioContext.createBufferSource();
        var request = new XMLHttpRequest();
        request.open('GET', audioFile, true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            var audioData = request.response;
            audioContext.decodeAudioData(audioData,
                (buffer) => {
                    source.buffer = buffer;
                    source.connect(audioContext.destination);
                    source.loop = true;
                },
                (err) => console.err(err)
            )
        }
        request.send()
    }

    useEffect(() => {
        
        setAudioControls(({ playAudio, stopAudio }) => {
            playAudio = () => {
                initAudio()
                source.start(0)
                setAudioOn(true)
            }
            stopAudio = () => {
                source.stop(0);
                setAudioOn(false)
            }
            return { playAudio, stopAudio }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [source])

    return (
        <Container bgColor='#D34848' id={sectionId}>
            <ScreenWrapper>
                <LeftSection>
                    <Title>SUPERIOR SOUND</Title>
                    <Subtitle2 color='#000000'>Experience live versions of your favourite songs.</Subtitle2>
                    <CTAButton color='#D34848'>SEE DEMO</CTAButton>
                </LeftSection>
                <RightSection>
                    <Image src={imgSpeaker1} top='10%' left='0' />
                    <Image src={imgSpeaker2} top='30%' left='0%' />
                    <MusicButton onClick={audioOn ? audioControls.stopAudio : audioControls.playAudio}> CLICK </MusicButton>

                </RightSection>
            </ScreenWrapper>
        </Container>
    )
}
export default Red

