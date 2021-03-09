import styled, { keyframes } from 'styled-components'

const gradientString = () => {
    let string = '';
    for (let i = 0; i <= 10; i++) {
        string +=
            `${i * 10}%{
            background-position: ${Math.floor(Math.random() * 11) * 10}% ${Math.floor(Math.random() * 11) * 10}%;
        }\n 
        `
    }
    return string;
}

const gradient = keyframes`
    ${gradientString()}

`
const ButtonTry = styled.div`
    width: 300px;
    height: 60px;
    margin: 10px auto;
    background: rgb(255,179,63);
    background: radial-gradient(circle, rgba(255,179,63,1) 0%, rgba(211,72,72,1) 30%, rgba(78,30,207,1) 70%, rgba(31,225,233,1) 100%);
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: 500;
    animation: ${gradient} 20s ease  infinite;
    background-size: 500px 500px;

`

export { ButtonTry, gradientString }
