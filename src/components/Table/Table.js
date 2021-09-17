import React from 'react'
import {connect} from 'react-redux'
import {
  sortByEmailAscending,
  sortByEmailDescending,
  sortByFNAscending,
  sortByFNDescending,
  sortByIDAscending,
  sortByIDDescending,
  sortByLNAscending,
  sortByLNDescending,
  sortByPhoneAscending,
  sortByPhoneDescending,
  sortByStateAscending,
  sortByStateDescending
} from '../../actions/sortActions'
import {calculateMax} from "../../actions/pageActions";
import {changePerson} from "../../actions/chosenPersonActions";
import {compareStrings, sortList} from "./TableUtils";
import './style.css'

const Table = ({
                   people, sort, search, pageNumber, stateFilter, chosenPerson, changePerson, calculateMax,
                   sortByIDAscending, sortByIDDescending, sortByFNAscending, sortByFNDescending,
                   sortByLNAscending, sortByLNDescending, sortByEmailAscending, sortByEmailDescending,
                   sortByPhoneAscending, sortByPhoneDescending, sortByStateAscending, sortByStateDescending
               }) => {
    let {list} = people;

    sortList(sort, "Id", "ascending", list);
    sortList(sort, "Id", "descending", list);

    sortList(sort, "FN", "ascending", list);
    sortList(sort, "FN", "descending", list);

    sortList(sort, "LN", "ascending", list);
    sortList(sort, "LN", "descending", list);

    sortList(sort, "Email", "ascending", list);
    sortList(sort, "Email", "descending", list);

    sortList(sort, "Phone", "ascending", list);
    sortList(sort, "Phone", "descending", list);

    sortList(sort, "State", "ascending", list);
    sortList(sort, "State", "descending", list);

    if (search !== "") {
        list = list.filter(({FN, LN, Email, Phone}) => {
            if (compareStrings(search, FN)) return true;
            if (compareStrings(search, LN)) return true;
            if (compareStrings(search, Email)) return true;
            return compareStrings(search, Phone);
        })
    }

    if (stateFilter !== "") {
        list = list.filter(({State}) => State === stateFilter)
    }

    const maxPages = list.length / 20 - Math.floor(list.length / 20) > 0 ? Math.floor(list.length / 20) + 1 : Math.floor(list.length / 20);

    calculateMax(maxPages);

    const listToRender = list.slice(20 * (pageNumber - 1), 20 * pageNumber);

    return (
        <div className="table">

            <div className="row header">
                <div className="cell"
                     onClick={() => sort.sortById.ascending ? sortByIDDescending() : sortByIDAscending()}>
                    ID {sort.sortById.ascending ? (<span>&#9650;</span>) : sort.sortById.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>
                <div className="cell"
                     onClick={() => sort.sortByFN.ascending ? sortByFNDescending() : sortByFNAscending()}>
                    First name {sort.sortByFN.ascending ? (<span>&#9650;</span>) : sort.sortByFN.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>
                <div className="cell"
                     onClick={() => sort.sortByLN.ascending ? sortByLNDescending() : sortByLNAscending()}>
                    Last name {sort.sortByLN.ascending ? (<span>&#9650;</span>) : sort.sortByLN.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>
                <div className="cell"
                     onClick={() => sort.sortByEmail.ascending ? sortByEmailDescending() : sortByEmailAscending()}>
                    Email {sort.sortByEmail.ascending ? (<span>&#9650;</span>) : sort.sortByEmail.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>
                <div className="cell"
                     onClick={() => sort.sortByPhone.ascending ? sortByPhoneDescending() : sortByPhoneAscending()}>
                    Phone {sort.sortByPhone.ascending ? (<span>&#9650;</span>) : sort.sortByPhone.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>
                <div className="cell"
                     onClick={() => sort.sortByState.ascending ? sortByStateDescending() : sortByStateAscending()}>
                    State {sort.sortByState.ascending ? (<span>&#9650;</span>) : sort.sortByState.descending ? (
                    <span>&#9660;</span>) : ' '}
                </div>

            </div>

            {listToRender.map((person, index) => (
                <div key={index} className="row"
                     onClick={() => chosenPerson ? chosenPerson.Id === person.Id ? undefined : changePerson(person) : changePerson(person)}>
                    <div className="cell">
                        {person.Id}
                    </div>
                    <div className="cell">
                        {person.FN}
                    </div>
                    <div className="cell">
                        {person.LN}
                    </div>
                    <div className="cell">
                        {person.Email}
                    </div>
                    <div className="cell">
                        {person.Phone}
                    </div>
                    <div className="cell">
                        {person.State}
                    </div>

                </div>
            ))}
        </div>
    )
};

const ConnectedTable = connect(
    state => ({
        sort: state.sort,
        search: state.search,
        pageNumber: state.pageNumber.current,
        stateFilter: state.stateFilter,
        chosenPerson: state.chosenPerson,
    }),
    dispatch => ({
        sortByIDDescending() {
            dispatch(sortByIDDescending())
        },
        sortByIDAscending() {
            dispatch(sortByIDAscending())
        },
        sortByFNAscending() {
            dispatch(sortByFNAscending())
        },
        sortByFNDescending() {
            dispatch(sortByFNDescending())
        },
        sortByLNAscending() {
            dispatch(sortByLNAscending())
        },
        sortByLNDescending() {
            dispatch(sortByLNDescending())
        },
        sortByEmailAscending() {
            dispatch(sortByEmailAscending())
        },
        sortByEmailDescending() {
            dispatch(sortByEmailDescending())
        },
        sortByPhoneAscending() {
            dispatch(sortByPhoneAscending())
        },
        sortByPhoneDescending() {
            dispatch(sortByPhoneDescending())
        },
        sortByStateAscending() {
            dispatch(sortByStateAscending())
        },
        sortByStateDescending() {
            dispatch(sortByStateDescending())
        },

        calculateMax(number) {
            dispatch(calculateMax(number))
        },
        changePerson(person) {
            dispatch(changePerson(person))
        },
    })
)(Table);

export default ConnectedTable
