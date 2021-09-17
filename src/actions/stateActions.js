import CONSTANTS from './constants'

const changeState = (state) => ({
    type: CONSTANTS.STATE_FILTER,
    state
});

export {changeState}
