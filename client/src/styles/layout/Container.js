import styled from 'styled-components'
import { device } from '../devices'

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    overflow-y: scroll;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
    height: 80vh;

    @media screen and ${device.mobile} {    
        margin-top: 6rem;
        height: 66vh;    
    }
`