import styled from 'styled-components'

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({hex}) => hex};
`

export default Background