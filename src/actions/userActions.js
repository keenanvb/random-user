import axios from 'axios'
import { GET_USER_DATA, FILTER_USER_DATA } from './types';
import { setAlert } from './index'

export const getUserData = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?results=50`);
            dispatch({
                type: GET_USER_DATA,
                payload: res.data.results
            })
            dispatch(setAlert('Users available', 'success'))
        } catch (err) {
            dispatch(setAlert('No users available', 'danger'))
            console.log('err', err);
        }
    }
}

export const filterUserData = (value) => {
    return {
        type: FILTER_USER_DATA,
        payload: value
    };
}