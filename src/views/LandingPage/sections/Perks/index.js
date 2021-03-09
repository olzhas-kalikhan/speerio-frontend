import styled from 'styled-components'
import { Container } from '@components/Container'
import { Title, Subtitle, Subtitle2 } from '@components/Titles'
const PerksContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
`
const PerkField = styled.div`
    
`
const Perks = ({ sectionId }) => {
    return (
        <Container bgColor={'#191919'} id={sectionId}>
            <Title margin={'5% 0'} width='20%'>PERKS</Title>
            <PerksContainer>
                <PerkField>
                    <Subtitle  textAlign='left'>
                        Subscription Payment Model
                    </Subtitle>
                </PerkField>
                <PerkField></PerkField>
                <PerkField></PerkField>
            </PerksContainer>
        </Container>
    )
}
export default Perks