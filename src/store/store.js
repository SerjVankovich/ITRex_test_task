import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import people from '../reducers/peopleReducer'
import sort from '../reducers/sortReducer'
import search from '../reducers/searchReducer'
import pageNumber from '../reducers/pageReducer'
import stateFilter from '../reducers/stateReducer'
import chosenPerson from '../reducers/chosenPersonReducer'


const initState = {
    people: {
        isInitState: true,
        isLoading: false,
        isError: false,
        list: []
    },
    sort: {
        sortById: {
            ascending: true,
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
    },
    search: "",
    pageNumber: {
        current: 1,
        max: 1
    },
    stateFilter: "",

    chosenPerson: {}
};

const storeFactory = (initialState = initState) => {
    return createStore(combineReducers({
        people,
        sort,
        search,
        pageNumber,
        stateFilter,
        chosenPerson
    }), initialState, applyMiddleware(thunk, createLogger()))
};

export default storeFactory
