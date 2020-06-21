import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import styled from 'styled-components';
import { successColour, dangerColour } from '../../styles/colors';
import { device } from '../../styles/devices'

export const AlertStyled = styled.div`
    right: 20px;
    bottom: 20px;
    padding: 0.8rem;
    margin: 1rem 0;
    opacity: 0.6;
    ${({ alertType }) => alertType == 'success' ? `color:#fff; background: ${successColour}; ` :
        `background:${dangerColour};color:#fff;`}
    position: fixed;	
    width: 300px;	
    max-width: 500px;	
    text-align: center;	
    z-index: 200;

    @media screen and ${device.mobile} {
        right: 12px;   
        width: 200px;
    }
`

const Alert = ({ alerts }) => {
    if (alerts !== null && alerts.length > 0) {
        return alerts.map((alert) => {
            return (
                <AlertStyled key={alert.id} alertType={alert.alertType}>
                    {alert.message}
                </AlertStyled>
            )
        })
    } else {
        return null
    }
}

Alert.propTypes = {
    alerts: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alert
    }
}

export default connect(mapStateToProps)(Alert)
