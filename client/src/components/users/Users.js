import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import Loading from '../loading/Loading'
import { getUserData, userDataSetPage } from '../../actions'
import UserItem from './UserItem'
import SearchBar from '../searchbar/SearchBar'
import { Container } from '../../styles/layout/Container'

const UserContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Users = ({ users: { users, filterUser, page, loading, searchText }, getUserData, userDataSetPage }) => {

    useEffect(() => {
        if (!users) {
            getUserData(page)
        }

    }, [getUserData, users, page]);


    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

        if (scrollHeight - scrollTop === clientHeight && searchText === '') {
            userDataSetPage(1);
            getUserData(page);
        }
    };

    return (
        <Container onScroll={(e) => { handleScroll(e) }}>
            <SearchBar />
            {loading ? <Loading /> :
                <UserContainerStyled >
                    {Users.length > 0 ? (
                        filterUser.map((user, index) => {
                            return (
                                <UserItem key={index} user={user} />
                            )
                        })
                    ) : <h2> No Users found...</h2>}
                </UserContainerStyled>
            }
        </Container>
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

export default connect(mapStateToProps, { getUserData, userDataSetPage })(Users);
