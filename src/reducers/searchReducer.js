import CONSTANTS from '../actions/constants'

const searchReducer = (state = "", action) => {
    switch (action.type) {
        case CONSTANTS.SEARCH_CHANGE:
            return action.text;
        default:
            return state
    }
};

export default searchReducer;
