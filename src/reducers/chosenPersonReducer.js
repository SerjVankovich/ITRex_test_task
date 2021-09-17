import CONSTANTS from '../actions/constants'

const chosenPersonReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_CHOSEN_PERSON:
            return action.person;
        default:
            return state
    }
};

export default chosenPersonReducer;
