import CONSTANTS from '../actions/constants'

const clearAllSort = () => ({
    sortById: {
        ascending: false,
        descending: false
    },
    sortByFN: {
        ascending: false,
        descending: false
    },
    sortByLN: {
        ascending: false,
        descending: false
    },
    sortByEmail: {
        ascending: false,
        descending: false
    },
    sortByPhone: {
        ascending: false,
        descending: false
    },
    sortByState: {
        ascending: false,
        descending: false
    }
});

const sortReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.SORT_ID_ASCENDING:
            state = clearAllSort();
            state.sortById.ascending = true;
            return {...state};
        case CONSTANTS.SORT_ID_DESCENDING:
            state = clearAllSort();
            state.sortById.descending = true;
            return {...state};
        case CONSTANTS.SORT_FN_ASCENDING:
            state = clearAllSort();
            state.sortByFN.ascending = true;
            return {...state};
        case CONSTANTS.SORT_FN_DESCENDING:
            state = clearAllSort();
            state.sortByFN.descending = true;
            return {...state};
        case CONSTANTS.SORT_LN_ASCENDING:
            state = clearAllSort();
            state.sortByLN.ascending = true;
            return {...state};
        case CONSTANTS.SORT_LN_DESCENDING:
            state = clearAllSort();
            state.sortByLN.descending = true;
            return {...state};
        case CONSTANTS.SORT_EMAIL_ASCENDING:
            state = clearAllSort();
            state.sortByEmail.ascending = true;
            return {...state};
        case CONSTANTS.SORT_EMAIL_DESCENDING:
            state = clearAllSort();
            state.sortByEmail.descending = true;
            return {...state};
        case CONSTANTS.SORT_PHONE_ASCENDING:
            state = clearAllSort();
            state.sortByPhone.ascending = true;
            return {...state};
        case CONSTANTS.SORT_PHONE_DESCENDING:
            state = clearAllSort();
            state.sortByPhone.descending = true;
            return {...state};
        case CONSTANTS.SORT_STATE_ASCENDING:
            state = clearAllSort();
            state.sortByState.ascending = true;
            return {...state};
        case CONSTANTS.SORT_STATE_DESCENDING:
            state = clearAllSort();
            state.sortByState.descending = true;
            return {...state};
        default:
            return state;
    }
};

export default sortReducer;
