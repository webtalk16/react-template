
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from '../features/counters/counterSlice'

function Main () {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    console.log('log store', useSelector(store => JSON.stringify(store)))

    return (
        <>
        <h1>Counter is {counter}</h1>
        <button onClick={() => dispatch(incremented(2))}>+</button>
        <button onClick={() => dispatch(decremented())}>-</button>
        </>
    );
}

export default Main