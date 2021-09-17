import CONSTANTS from './constants'

const changePerson = (person) => ({
    type: CONSTANTS.CHANGE_CHOSEN_PERSON,
    person
});

export {changePerson}
