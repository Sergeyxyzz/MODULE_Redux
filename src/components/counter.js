import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

// actions = {
//     inc: inc,
//     dec: dec,
//     rnd: rnd
// } так выглядит импортированный объект из actions, которому я сам дал имя actions, через import * as actions

const Counter = ({counter, inc, dec, rnd}) => {
    return (<div className='jumbotron'>
        <h1>{counter}</h1>
        <button onClick={dec} className='btn btn-primary'>DEC</button>
        <button onClick={inc} className='btn btn-primary'>INC</button>
        <button onClick={rnd} className='btn btn-primary'>RND</button>
    </div>)
}

const mapStateToProps = state => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);