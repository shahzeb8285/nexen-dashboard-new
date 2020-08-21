
export const USER_FETCHED = 'USER_FETCHED';
export const INCOME_FETCHED = 'INCOME_FETCHED';
export const LEVEL_BOUGHT = 'LEVEL_BOUGHT';

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


export function onLevelBought(level,amount) {
    return (dispatch) => {
        dispatch({
            type: LEVEL_BOUGHT,
            cart:{
                level,
                amount
            }

        });

    }
}