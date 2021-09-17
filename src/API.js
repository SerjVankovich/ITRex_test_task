import API from "./config";
import {fetchError, fetchSuccess, tryFetchPeople} from "./actions/peopleActions";
import axios from "axios";

const fetchPeople = () => dispatch => {
    dispatch(tryFetchPeople());
    return axios(API.API).then(res => {
        if (res.status === 200) {
            const list = res.data.map(person => ({
                Id: person.id,
                FN: person.firstName,
                LN: person.lastName,
                Email: person.email,
                Phone: person.phone,
                State: person.adress.state,
                adress: person.adress,
                description: person.description

            }));
            dispatch(fetchSuccess(list));
            return res.data

        } else {
            dispatch(fetchError)
        }
    })
        .catch(() => {
            dispatch(fetchError())
        })
};

export default fetchPeople;
