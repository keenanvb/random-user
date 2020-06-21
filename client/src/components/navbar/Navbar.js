import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { lightColor } from '../../styles/colors'

const Navbarstyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    background: #2c3e50;
    height: 10vh;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
`
const NavbarUlstyled = styled.ul`
    display: flex;
`

const LinksStyled = styled.a`
    color: ${lightColor};
    padding: 0.45rem;
    margin: 0.25rem;
`

const Navbar = ({ location }) => {

    let pathname = '';

    if (location.pathname !== '/') {
        pathname = 'Profiles'
    }

    return (
        <Navbarstyled>
            <h1>
                <LinksStyled>
                    <Link to="/">{pathname}</Link>
                </LinksStyled >
            </h1>
            <NavbarUlstyled>
                <li></li>
                <li></li>
                <li></li>
            </NavbarUlstyled>
        </Navbarstyled>
    )
}

export default Navbar
