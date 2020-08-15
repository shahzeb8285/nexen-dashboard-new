
export const USER_FETCHED = 'USER_FETCHED';
export const INCOME_FETCHED = 'INCOME_FETCHED';

export function incomeFetched(income) {
    return (dispatch) => {
        dispatch({
            type: INCOME_FETCHED,
            income,

        });

    }
}

export function userFetched(user) {
    return (dispatch) => {
        dispatch({
            type: USER_FETCHED,
            user,

        });

    }
}
