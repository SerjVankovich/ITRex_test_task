import React from 'react'
import {connect} from "react-redux";
import './style.css'

const InfoCard = ({person: {Id, FN, LN, Email, Phone, adress: {state, city, streetAddress, zip}, description}}) => (
    <div className="card">
        <h1>{FN}</h1>
        <h2>{LN}</h2>
        <div className="row_"><h3 className="title">ID: </h3> <span>{Id}</span></div>
        <div className="row_"><h3 className="title">Description: </h3> <span>{description}</span></div>
        <div className="row_"><h3 className="title">Email: </h3> <span>{Email}</span></div>
        <div className="row_"><h3 className="title">Phone: </h3> <span>{Phone}</span></div>
        <h3>Address: </h3>
        <div className="row_ row__"><h4 className="title">State: </h4> <span>{state}</span></div>
        <div className="row_ row__"><h4 className="title">City: </h4> <span>{city}</span></div>
        <div className="row_ row__"><h4 className="title">Address: </h4> <span>{streetAddress}</span></div>
        <div className="row_ row__"><h4 className="title">Zip: </h4> <span>{zip}</span></div>
    </div>
);

const ConnectedInfoCard = connect(
    state => ({
        person: state.chosenPerson
    })
)(InfoCard);

export default ConnectedInfoCard;




