import {combineReducers} from 'redux';

import {Action} from '../types/actions';
import {GlobalState} from '../types/global_state';

function counter(state = 0, action: Action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;

        default:
            return state;
    }
}

export default combineReducers<GlobalState, Action>({
    counter,
});
