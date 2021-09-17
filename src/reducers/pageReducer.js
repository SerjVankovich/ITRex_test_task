import CONSTANTS from '../actions/constants'

const pageReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.PAGE_CHANGE:
            state.current = action.number;
            return {...state};
        case CONSTANTS.MAX_PAGES:
            state.max = action.maxNum;
            return {...state};
        default:
            return state;
    }
};

export default pageReducer;
