import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from '../loading/Loading'
import { getUserData } from '../../actions'
import UserItem from './UserItem'
import SearchBar from '../searchbar/SearchBar'

const Users = ({ users: { users, filterUser, loading }, getUserData }) => {


    useEffect(() => {
        if (!users) {
            getUserData()
        }
    }, [getUserData, users]);

    return (
        <Fragment>
            <SearchBar />
            {loading ? <Loading /> :
                <div className="users-container">
                    {Users.length > 0 ? (
                        filterUser.map((user, index) => {
                            return (
                                <UserItem key={index} user={user} />
                            )
                        })
                    ) : <h2> No Users found...</h2>}
                </div>
            }
        </Fragment>
    )
}

Users.propTypes = {
    getUserData: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { getUserData })(Users);
