import { GET_USER_DATA, FILTER_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
    users: null,
    searchText: '',
    filterUser: null,
    loading: true,
    error: {}
};

export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_USER_DATA:
            return { ...state, users: payload, filterUser: payload, loading: false }
        case FILTER_USER_DATA:
            return {
                ...state,
                filterUser: state.users.filter((user) => { return `${user.name.first} ${user.name.last}`.toLowerCase().indexOf(payload.toLowerCase()) > -1 }),
                searchText: payload,
                loading: false
            }
        default:
            return state;
    }
}