import styled, { css } from 'styled-components'
const Title = styled.h1`
    font-size: 3.1vw;
    font-weight: 700;
    letter-spacing: 6.5px;
    color: #FFFFFF;
    max-width: 90%;
    user-select: none;
    width: ${({ width }) => width ? width : ''};
    margin: ${({ margin }) => margin ? margin : '15% auto 0'};
    ${({ shadow }) => shadow && css`text-shadow: #000 10px 0 10px,#000 5px 0 10px;`}
    
`
const Subtitle = styled.h3`
    font-size: 1.6vw;
    font-weight: 400;
    letter-spacing: 3.2px;
    color: ${props => props.color ? props.color : '#FFFFFF'};
    user-select: none;
    text-align: ${({ textAlign }) => textAlign ? textAlign : ''};
    margin: ${({ margin }) => margin ? margin : '0 28%'};
    ${({ shadow }) => shadow && css`text-shadow: #000 10px 0 10px;`}
`
const Subtitle2 = styled.h3`
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: left;
    color: ${props => props.color ? props.color : '#FFFFFF'};
    margin: 0 23% 0;
    font-weight: 500;
    ${({ shadow }) => shadow && css`text-shadow: #FFF 10px 0 10px;`}
    user-select: none;
`

export { Title, Subtitle, Subtitle2 }