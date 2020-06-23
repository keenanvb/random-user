import axios from 'axios'
import { GET_USER_DATA, FILTER_USER_DATA, SET_PAGE } from './types';
import { setAlert } from './index'

export const getUserData = (page) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://randomuser.me/api/?page=${page}&&results=50`);
            dispatch({
                type: GET_USER_DATA,
                payload: res.data.results
            })

            page ? dispatch(setAlert('Loading more users', 'success')) : dispatch(setAlert('Users available', 'success'))
            // dispatch(setAlert('Users available', 'success'))
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

export const userDataSetPage = (value) => {
    return {
        type: SET_PAGE,
        payload: value
    };
}