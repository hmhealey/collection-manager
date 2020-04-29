import {combineReducers} from 'redux';

// eslint-disable-next-line no-unused-vars
import {Action} from '../types/actions';
// eslint-disable-next-line no-unused-vars
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
