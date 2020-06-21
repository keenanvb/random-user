import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { device } from '../../styles/devices'

const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 1em;
    margin: 1rem;
    border-radius: 5px;
    background: #fff;
    width: 210px;
    height: 120px;
    border-bottom: 1px solid #364f6b;

    @media screen and ${device.mobile} {
        width: 280px;
        
    }
`
const CardImage = styled.img`
    margin-top: 1rem;
    width: 60px;
    border-radius: 50%;
`
const CardInfo = styled.div`
    padding: 1rem;
    width: 200px;
`


const UserItems = ({ user }) => {

    let fullname = `${user.name.first}-${user.name.last}`

    return (
        <Link to={{
            pathname: `/${(fullname).toLowerCase()}`,
            state: {
                user
            }
        }}>
            <Card>
                <CardImage src={user.picture.medium} alt="" />
                <CardInfo>
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>{user.location.city} </p>
                </CardInfo>
            </Card>
        </Link>
    )
}



UserItems.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItems
