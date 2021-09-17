import CONSTANTS from './constants'

const changePage = (number) => ({
    type: CONSTANTS.PAGE_CHANGE,
    number
});

const calculateMax = (maxNum) => ({
    type: CONSTANTS.MAX_PAGES,
    maxNum
});

export {changePage, calculateMax};
