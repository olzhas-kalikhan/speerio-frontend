import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height:100vh;
    background: url(${props => props.bgImage}) no-repeat padding-box;
    background-color: ${({ bgColor }) => bgColor ? bgColor : `black`};
    background-size:cover;
    background-position: center center; 
    padding: 100px 6%;
    -webkit-transition: background-image 1s ease-in-out;
    transition: background-image 1s ease-in-out;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;  
`

const ScreenWrapper = styled.div`
    display: flex;
    width:100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    background: ${({ background }) => background};

`
export { Container, ScreenWrapper }