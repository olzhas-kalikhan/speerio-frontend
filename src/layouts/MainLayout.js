import { useState } from 'react'
import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline'
import styled, { css, keyframes } from 'styled-components'
import { debounce } from "debounce";

const menuTransition = keyframes`
    from{
        width: 50px;
        height: 50px;
    }
    to {
        border-radius: 50%;
        background-color: #1FE1E9;

    }
`
const menuShrink = keyframes`
    from{
        background-color:#1FE1E9;
        border-radius: 50%;
        width: 400px;
        height: 350px;
    }
    to{
        width: 100px;
        height: 50px;
        border-radius: 50%;
    }
`

const Header = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    color: #FFFFFF;
    opacity: 1;
    display: flex;
    flex-direction: column;
    position: fixed;
    :hover {
        cursor: pointer;
    }   
    ${props => props.active ? css`
        border-radius: 50%;
        width: 400px;
        height: 350px;
        animation: ${menuTransition} 1s ease 1 ;
        background-color: #1FE1E9;
    `:
        css`
        width: 400px;
        animation: ${menuShrink} 1s ease 1 ;
    `}
      
    
`
const Wrapper = styled.div`

    width: 100%; 
    overflow: hidden;
`

const Title = styled.h2`
    
    font-size: 2.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    letter-spacing: 4.8px;
    margin: 0 20px;
    display:flex;
    flex-wrap: nowrap;
`
const List = styled.ul`
    list-style-type:  none;
    padding-top: 50px;
    text-align: left;
    font-size: 1.8rem;
    font-weight: 700;
`
const ListItem = styled.li`
    :hover{
        color:black;
    }
`

const MainLayouts = ({ children, onWheel }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu)
        console.log('he')
    }
    return (
        <Wrapper onWheel={debounce(onWheel, 300)}>
            <Header active={toggleMenu} >
                <Title onClick={handleMenuClick}><MenuOutline size={60} style={{ position: 'relative' }} /> EXP|CON</Title>
                {toggleMenu &&
                    <List>
                        <ListItem>WHAT IS IT</ListItem>
                        <ListItem>PERKS</ListItem>
                        <ListItem>PRICING</ListItem>
                    </List>}
            </Header>
            <div>
                {children}
            </div>
        </Wrapper >
    )
}

export default MainLayouts