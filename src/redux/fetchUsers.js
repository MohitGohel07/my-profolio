import { fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure } from './actions';
import * as Constant from "../component/Constant";

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return fetch(Constant.userUrl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchUsersSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
}

// Helper function for error handling
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}