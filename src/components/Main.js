
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter.js";

function Main () {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    console.log('log store')
    console.log(useSelector(store => console.log(store)))

    return (
        <>
        <h1>Counter is {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}

export default Main