import React, { useState } from 'react'
import moment from 'moment'
import Fade from 'react-reveal/Fade';

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
            <div className="card">
                <div className="card-header">
                    <img src={user.picture.medium} alt="" className="profile-img"></img>
                </div>
                <div className="card-body">
                    <Fade>
                        <p className="full-name">{`${user.name.first} ${user.name.last}`}</p>
                        <p className="info"><i className="fas fa-birthday-cake"></i> {`${dob} | ${user.gender} | ${user.dob.age}`}</p>
                        <p className="info"><i className="far fa-envelope"></i> {`${user.email}`}</p>
                        <p className="info"><i className="fas fa-mobile-alt"></i> {`${user.cell} | ${user.phone}`}</p>
                    </Fade>
                </div>
                <button className='btn' onClick={() => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    useToggle(!toggle)
                }} >
                    {toggle ? 'Hide Info' : 'More Info'}
                </button>
            </div>
            {toggle ?
                <div className="card">
                    <div className="card-header">
                        <img src={flag} alt="" className="country-img"></img>
                    </div>
                    <div className="card-body-container">
                        <div id="address-info" className="card-body-switch">
                            <p className="address"><i className="fas fa-map-marker-alt"></i> {`${address}`}</p>
                        </div>
                        <div id="private-info" className="card-body-switch">
                            <div>

                                <p className="address"><i className="far fa-user"></i>{`${login.username}`}</p>
                                <p className="address"><i className="fas fa-lock"></i>{`${login.password}`}</p>
                            </div>
                            {/* <div>
                                <p className="address"><i className="fas fa-sign-in-alt"></i> {`${login.salt}`}</p>
                                <p className="address"><i className="fas fa-map-marker-alt"></i> {`${login.md5}`}</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="col vr">
                            <p onClick={() => {
                                moveToAddress()
                            }}><i className="fas fa-home"></i> Address</p>
                        </div>
                        <div className="col">
                            <p onClick={() => {
                                moveToPrivate()
                            }}><i className="fas fa-key"></i> Private</p>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Profile