import React from 'react'
import { connect } from 'react-redux'
import { filterUserData } from '../../actions';
import styled from 'styled-components';
import { device } from '../../styles/devices'

const SearchBoxstyled = styled.div`
    left: 40%;
    top:6%;
    margin: 2px auto;
    background-color: #2c3e50;
    height: 50px;
    border-radius: 60px;
    padding: 10px;
    width: 250px;
    position: absolute;    

    @media screen and ${device.mobile} {
        left: 16%;
    }
}
`

const SearchInput = styled.input`
    width: 160px;
    border: none;
    background: none;
    outline: none;
    float: left;  
    padding: 0;
    color: white;
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
    padding-left: 10px;
`

const SearchButton = styled.div`
    position: relative;
    float: right;
    bottom: 4px;
    width: 40px;
    height: 40px;
    left: 4px;
    border-radius: 50%;
    background-color: white;
    border-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const SearchBar = ({ users: { users, searchText }, filterUserData }) => {
    return (
        <SearchBoxstyled>
            <SearchInput placeholder={users ? `Search` : `Loading Users`} onChange={(e) => {
                if (users) {
                    filterUserData(e.target.value)
                }

            }}
                value={searchText}
            />
            <SearchButton onClick={() => { }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path fill="none"
                        d="M0 0h24v24H0V0z"
                    />
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            </SearchButton>
        </SearchBoxstyled >
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { filterUserData })(SearchBar);