import CONSTANTS from '../actions/constants'

const stateReducer = (state = "", action) => {
    switch (action.type) {
        case CONSTANTS.STATE_FILTER:
            return action.state;
        default:
            return state;
    }
};

export default stateReducer;
