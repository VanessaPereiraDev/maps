import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Intro from './Intro'

function Home() {
    return (
        <>
            <Container>
                <ImgSlider />
                <Intro />
            </Container>      
        </>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 60px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;       
`