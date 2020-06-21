import styled from 'styled-components'
import { darkColour } from '../colors'


export const Button = styled.div`
    background: ${darkColour};
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 0.8rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
    outline: none;

    &:hover {
        opacity: 0.8;
    }
`