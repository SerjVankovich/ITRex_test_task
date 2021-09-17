import React from 'react'
import {connect} from 'react-redux'
import {changePage} from '../../actions/pageActions'
import './style.css'
import {
    calculate1,
    calculate2,
    calculate3,
    calculateStyleFor2,
    calculateStyleFor3,
    onCLick2,
    onCLick3
} from "./PageChangerUtils";

const PageChanger = ({pageNumber, maxPages, changePage}) => {

    const current = pageNumber === 1 ? 1 : pageNumber === maxPages ? 3 : 2;

    return (
        <div className="changer">
            <div className="pageButton"
                 style={current === 1 ? {background: "#1b85e7"} : {}}
                 onClick={() => current === 1 ? undefined : changePage(pageNumber - 1)}
            >
                {calculate1(pageNumber, maxPages)}
            </div>
            <div className="pageButton"
                 style={calculateStyleFor2(current, maxPages, pageNumber)}
                 onClick={() => onCLick2(current, maxPages, pageNumber, changePage)}
            >
                {calculate2(pageNumber, maxPages)}
            </div>
            <div className="pageButton"
                 style={calculateStyleFor3(current, maxPages, pageNumber)}
                 onClick={() => onCLick3(current, maxPages, pageNumber, changePage)}
            >
                {calculate3(pageNumber, maxPages)}
            </div>
        </div>
    )
};

const ConnectedPageChanger = connect(
    state => ({
        pageNumber: state.pageNumber.current,
        maxPages: state.pageNumber.max
    }),

    dispatch => ({
        changePage(pageNum) {
            dispatch(changePage(pageNum))
        }
    })
)(PageChanger);

export default ConnectedPageChanger;
