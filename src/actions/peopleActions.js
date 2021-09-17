import CONSTANTS from './constants'

const tryFetchPeople = () => ({
    type: CONSTANTS.TRY_TO_FETCH
});

const fetchSuccess = (people) => ({
    type: CONSTANTS.FETCH_SUCCESS,
    people
});

const fetchError = () => ({
    type: CONSTANTS.FETCH_ERROR
});

export {tryFetchPeople, fetchError, fetchSuccess}
