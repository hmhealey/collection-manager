import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../types/global_state';

export default function TestWidget() {
    const counter = useSelector((state: GlobalState) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <span>{`Counter is at ${counter}`}</span>
            <button onClick={() => dispatch({type: 'increment'})}>{'+1'}</button>
            <button onClick={() => dispatch({type: 'decrement'})}>{'-1'}</button>
        </>
    );
}