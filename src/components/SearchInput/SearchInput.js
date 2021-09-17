import React from 'react'
import {connect} from 'react-redux'
import {changeSearch} from '../../actions/searchActions'
import {changePage} from "../../actions/pageActions";
import './style.css'

const Input = ({changeSearch, changePage}) => (
    <form className="formInp" role="search" onChange={e => {
        changeSearch(e.target.value);
        changePage(1)
    }}>
        <input className="input" id="search" type="search" placeholder="Search..." autoFocus required/>
    </form>
);

const ConnectedInput = connect(
    ({people}) => ({
        people
    }),

    dispatch => ({
        changeSearch(text) {
            dispatch(changeSearch(text))
        },
        changePage(pageNumber) {
            dispatch(changePage(pageNumber))
        }
    })
)(Input);

export default ConnectedInput
