import React from 'react'
import {connect} from 'react-redux'
import Table from './components/Table/Table'
import Inputs from './components/Inputs/Inputs'
import PageChanger from './components/PageChanger/PageChanger'
import InfoCard from './components/InfoCard/InfoCard'
import fetchPeople from './API'

function App({people, fetchPeople, chosenPerson}) {
    if (people.isInitState) {
        fetchPeople()
    }
    return (
        <div>
            <Inputs/>
            <Table people={people} fetchPeople={fetchPeople}/>
            <PageChanger/>
            {chosenPerson.Id ? <InfoCard/> : undefined}
        </div>
    );
}

const AppConnected = connect(
    state => ({
        people: state.people,
        chosenPerson: state.chosenPerson,
    }),
    dispatch => ({
        fetchPeople() {
            dispatch(fetchPeople())
        },
    })
)(App);


export default AppConnected;
