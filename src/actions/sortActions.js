import CONSTANTS from './constants'

const sortByIDAscending = () => ({
    type: CONSTANTS.SORT_ID_ASCENDING
});

const sortByIDDescending = () => ({
    type: CONSTANTS.SORT_ID_DESCENDING
});

const sortByFNAscending = () => ({
    type: CONSTANTS.SORT_FN_ASCENDING
});

const sortByFNDescending = () => ({
    type: CONSTANTS.SORT_FN_DESCENDING
});

const sortByLNAscending = () => ({
    type: CONSTANTS.SORT_LN_ASCENDING
});

const sortByLNDescending = () => ({
    type: CONSTANTS.SORT_LN_DESCENDING
});

const sortByEmailAscending = () => ({
    type: CONSTANTS.SORT_EMAIL_ASCENDING
});

const sortByEmailDescending = () => ({
    type: CONSTANTS.SORT_EMAIL_DESCENDING
});

const sortByPhoneAscending = () => ({
    type: CONSTANTS.SORT_PHONE_ASCENDING
});

const sortByPhoneDescending = () => ({
    type: CONSTANTS.SORT_PHONE_DESCENDING
});

const sortByStateAscending = () => ({
    type: CONSTANTS.SORT_STATE_ASCENDING
});

const sortByStateDescending = () => ({
    type: CONSTANTS.SORT_STATE_DESCENDING
});

export {
    sortByIDAscending, sortByIDDescending, sortByFNAscending, sortByFNDescending, sortByLNAscending,
    sortByLNDescending, sortByEmailAscending, sortByEmailDescending, sortByPhoneAscending,
    sortByPhoneDescending, sortByStateAscending, sortByStateDescending
}


