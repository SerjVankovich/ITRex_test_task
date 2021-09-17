import CONSTANTS from '../actions/constants'

const peopleReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_ERROR:
            state.isLoading = false;
            state.isError = true;
            return {...state};
        case CONSTANTS.TRY_TO_FETCH:
            state.isLoading = true;
            state.isInitState = false;
            return {...state};
        case CONSTANTS.FETCH_SUCCESS:
            state.list = action.people;
            state.isLoading = false;
            return {...state};
        default:
            return state
    }
};

export default peopleReducer
