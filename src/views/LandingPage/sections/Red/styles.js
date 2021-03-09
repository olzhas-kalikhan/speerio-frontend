import styled from 'styled-components'

const LeftSection = styled.div`
    width: 60%;
`
const RightSection = styled.div`
    width: 40%;
`
const Image = styled.img`
    position: relative;
    top: ${props => props.top};
    left: ${props => props.left};
    width: 35%;
    margin: 0;
`
const MusicButton = styled.button`
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: transparent;
    border: solid 4px #FFFFFF;
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 600;
    outline: none;
    top: 30%;
    right: 50%;
    :hover{
        cursor: pointer;
        background: rgba(255,255,255,0.1);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    :active{
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`


export { LeftSection, RightSection, Image, MusicButton }