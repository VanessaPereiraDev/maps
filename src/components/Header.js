import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo-maps.png" alt="" />
            </a>
            <Menu>
                <a href="#">Menu</a>
                <a href="#concurso">Concurso</a>
                <a href="#programa">Programa</a>
                <a href="#convidados">Convidados</a>
                <a href="#contactos">Contactos</a>
            </Menu>
            <RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Menú</a></li>
                <li><a href="#concurso">Concurso</a></li>
                <li><a href="#programa">Programa</a></li>
                <li><a href="#convidados">Convidados</a></li>
                <li><a href="#contactos">Contactos</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    background: #000018;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        width: 150px;
        padding: 10px 0;
        cursor: pointer;

        @media(max-width: 768px) {
            width: 100px;
        }
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-family: 'Press Start 2P';
        font-size: 14px;
        padding: 0 10px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        color: #fff;
        position: relative;
    }

    a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        margin-bottom: -12px;
        left: 0;
        background-color: #fff;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    @media(max-width: 768px) {
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
`

const CustomMenu = styled(MenuIcon)`
    visibility: hidden!important;
    color: white!important;
    cursor: pointer;

    @media(max-width: 768px) {
        visibility: visible!important;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    
        a {
            font-weight: 600;
            color: #000;
        }

        a:hover {
            opacity: 0.5;
        }
    
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`