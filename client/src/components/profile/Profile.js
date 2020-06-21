import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components';
import { device } from '../../styles/devices'
import { Button } from '../../styles/layout/Button'
import Fade from 'react-reveal/Fade';

const ProfileCard = styled.div`
    width: 400px;
    margin: 75px auto 0;
    background-color: #fff;
    box-shadow: 0 3px 30px rgba(0, 0, 0, .14);
    color: #444;
    text-align: center;
    font-size: 16px;

    @media screen and ${device.mobile} {
        width: 92%;
    }
`

const FullName = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px 0 0;
`

const ProfileHeader = styled.div`
    position: relative;
    height: 48px;

    @media screen and ${device.mobile} {
        height: 28px;
    }
`

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 6px solid #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);

    @media screen and ${device.mobile} {
        width: 70px;
        height: 70px;
    }
`

const CountryImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    position: absolute;
    left: 2%;
    top:14%;
    transform: translate(-50%, -50%);
    border: 6px solid #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);

    @media screen and ${device.mobile} {
        width: 50px;
        height: 50px;
    }
`

const ProfileBody = styled.div`
    padding: 8px 40px;
`

const ProfileInfo = styled.div`
    font-size: 12px;
    color: #777;
    margin: 5px auto;
    text-align: center;
`

const ProfileBody2 = styled.div`
    height: 100px;
    overflow: auto;
    overflow-x: hidden;
    position: relative;
`

const SwitchBody = styled.div`
    margin: auto;
    top: 4px;
    position: absolute;
    width: 300px;
    transition: .5s;
    text-align: left;

    @media screen and ${device.mobile} {
        width: 200px;
    }
    
`

const CardFooter = styled.div`
    display: table;
    width: 100%;
    border-top: 1px solid #e6e6e6;
`

const Column = styled.div`
    display: table-cell;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
`


const Profile = ({ location: { state: { user } } }) => {

    const { location, nat, login } = user

    const [toggle, useToggle] = useState(false)

    let dob = moment(user.dob.date).format('DD MMMM YYYY');
    let address = `${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.country}`
    let flag = `https://www.countryflags.io/${nat}/flat/64.png`

    const moveToPrivate = () => {
        let privateInfo = document.getElementById('private-info');
        let addressInfo = document.getElementById('address-info');
        addressInfo.style.left = '-500px'
        privateInfo.style.left = '60px'
    }


    const moveToAddress = () => {
        let privateInfo = document.getElementById('private-info');
        let addressInfo = document.getElementById('address-info');
        privateInfo.style.left = '500px'
        addressInfo.style.left = '60px'
    }


    return (
        <div>
            <ProfileCard>
                <ProfileHeader>
                    <ProfileImage src={user.picture.medium} alt="" />
                </ProfileHeader>
                <ProfileBody>
                    <Fade>
                        <FullName>{`${user.name.first} ${user.name.last}`}</FullName>
                        <ProfileInfo><i className="fas fa-birthday-cake"></i> {`${dob} | ${user.gender} | ${user.dob.age}`}</ProfileInfo>
                        <ProfileInfo><i className="far fa-envelope"></i> {`${user.email}`}</ProfileInfo>
                        <ProfileInfo><i className="fas fa-mobile-alt"></i> {`${user.cell} | ${user.phone}`}</ProfileInfo>
                    </Fade>
                </ProfileBody>
                <Button toggle={toggle} onClick={() => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useToggle(!toggle)
                }}>
                    {toggle ? 'Hide Info' : 'More Info'}
                </Button>
            </ProfileCard>
            {
                toggle ?
                    <ProfileCard>
                        <ProfileHeader>
                            <CountryImage src={flag} alt="" />
                        </ProfileHeader>
                        <ProfileBody2>
                            <SwitchBody id="address-info" >
                                <p className="address"><i className="fas fa-map-marker-alt"></i> {`${address}`}</p>
                            </SwitchBody>
                            <SwitchBody id="private-info" >
                                <div>
                                    <p className="address"><i className="far fa-user"></i>{`${login.username}`}</p>
                                    <p className="address"><i className="fas fa-lock"></i>{`${login.password}`}</p>
                                </div>
                                {/* <div>
                                <p className="address"><i className="fas fa-sign-in-alt"></i> {`${login.salt}`}</p>
                                <p className="address"><i className="fas fa-map-marker-alt"></i> {`${login.md5}`}</p>
                            </div> */}
                            </SwitchBody>
                        </ProfileBody2>
                        <CardFooter>
                            <Column className="vr">
                                <p onClick={() => {
                                    moveToAddress()
                                }}><i className="fas fa-home"></i> Address</p>
                            </Column>
                            <Column>
                                <p onClick={() => {
                                    moveToPrivate()
                                }}><i className="fas fa-key"></i> Private</p>
                            </Column>
                        </CardFooter>
                    </ProfileCard>
                    : null
            }
        </div >
    )
}

export default Profile