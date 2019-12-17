import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    color: white;
    text-shadow: 2px 2px 4px #000000;
`

function Home() {
    return(
        <>
        <Wrapper>
            <h1>Welcome To The Lost Village!</h1>
        </Wrapper>>
        </>
    )
}

export default Home