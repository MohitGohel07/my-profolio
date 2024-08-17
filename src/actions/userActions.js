// actions/userActions.js
import axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error
});

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get('http://127.0.0.1:8000/api/user')
            .then(response => {
                const user = response.data;
                dispatch(fetchUserSuccess(user));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};
