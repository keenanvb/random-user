import React from 'react'
import styled from 'styled-components'

export const LoadingStyled = styled.div`
    margin: 75px auto 0;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border-top: 4px solid #2c3e50;
    border-right: 2px solid transparent;
    border-bottom:none;
    border-left:none;
    animation: spinner 600ms linear infinite;

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
`

const Loading = () => {
    return (
        <LoadingStyled />
    )
}

export default Loading
