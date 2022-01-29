import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Intro() {

    const [show, setShow] = useState(false)
    
    return (
        <Container>
            <Estrada>
                <img src="/images/estrada.png" />
            </Estrada>
            <Pacman onClick={() => setShow(!show)}>
                <img src="/images/pacman.png" />
            </Pacman>
            {show &&
                <Wrap>
                    <Fade bottom>
                        <Fala>
                            Olá! Maps é um evento de todos e para todos. Aqui vais ter a oportunidade de conhecer e ouvir testemunhos, de quem já esteve no teu lugar, e está onde sonhou ficar!
                        </Fala>*
                    </Fade>
                </Wrap>}
            <DownArrow src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Intro

const Container = styled.div`
    color: #fff;
`

const Estrada = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    img {
        width: 100%;
        height: 100px;
        z-index: -1;

        @media(max-width: 768px) {
            height: 70px;
        }
    }
`

const Pacman = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    cursor: pointer;

    img {
        width: 140px;

        @media(max-width: 768px) {
            width: 100px;
        }
    }
`

const Wrap = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: 12%;
    margin-left: 12%;

    @media(max-width: 768px) {
        margin-bottom: 40%;
        margin-left: 20%;
    }
`

const Fala = styled.div`
    position: relative;
    font-family: 'Press Start 2P';
    font-size: 10px;
    line-height: 24px;
    width: 350px;
    background: #fff;
    border-radius: 40px;
    padding: 24px;
    text-align: center;
    color: #000;
    border: 1px solid #000;

    &:before {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 24px solid #fff;
        border-right: 12px solid transparent;
        border-top: 12px solid #fff;
        border-bottom: 20px solid transparent;
        left: 32px;
        bottom: -24px;
    }

    @media(max-width: 768px) {
        line-height: 18px;
        width: 300px;
    }
`

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
`