import { INCOME_FETCHED,USER_FETCHED } from '../actions/web3Actions';

export default function Web3Reducer(state = {
    user: {},
    incomes: {}
}, action) {
    switch (action.type) {
        case INCOME_FETCHED:
            return Object.assign({}, state, {
                incomes:action.income
            });
        case USER_FETCHED:
            return Object.assign({}, state, {
                user:action.user

            });
        // case REGISTER_FAILURE:
        //     return Object.assign({}, state, {
        //         isFetching: false,
        //         errorMessage: action.payload,
        //     });
        default:
            return state; 
    }
}
