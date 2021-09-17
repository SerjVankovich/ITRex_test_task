import React from 'react'
import {connect} from "react-redux";
import {changeState} from "../../actions/stateActions";
import {changePage} from "../../actions/pageActions";
import './style.css'

const StateSelect = ({list, currentState, changeState, changePage}) => {
    const stateList = Array.from(new Set(list.map(person => person.State)));
    return (
        <form className="formSel">
            <select placeholder="Filter by state" onChange={e => {
                if (e.target.value !== currentState) {
                    if (e.target.value === "Select state") {
                        changeState("")
                    } else {
                        changeState(e.target.value);
                    }
                    changePage(1)
                }
            }}>
                <option className="option">Select state</option>
                {stateList.map((state, i) => (
                    <option key={i} className="option">{state}</option>
                ))}
            </select>
        </form>
    )
};

const ConnectedStateSelect = connect(
    state => ({
        list: state.people.list,
        currentState: state.stateFiler
    }),
    dispatch => ({
        changeState(state) {
            dispatch(changeState(state))
        },
        changePage(pageNumber) {
            dispatch(changePage(pageNumber))
        }
    })
)(StateSelect);

export default ConnectedStateSelect;
