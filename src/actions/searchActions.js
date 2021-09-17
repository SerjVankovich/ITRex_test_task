import CONSTANTS from './constants'

const changeSearch = text => ({
    type: CONSTANTS.SEARCH_CHANGE,
    text
});

export {changeSearch}
