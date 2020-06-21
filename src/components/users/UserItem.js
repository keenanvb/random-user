import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItems = ({ user }) => {

    let fullname = `${user.name.first}-${user.name.last}`

    return (
        <Link to={{
            pathname: `/${(fullname).toLowerCase()}`,
            state: {
                user
            }
        }}>
            <div className="card-container">
                <div className="card-image">
                    <img src={user.picture.medium} alt="" className="round-img"></img>
                </div>
                <div className="card-info">
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>{user.location.city} </p>
                </div>
            </div>
        </Link>
    )
}



UserItems.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItems
