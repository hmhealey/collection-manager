import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../reducers';
import TestWidget from './TestWidget';

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>Collection Manager!</h1>
                <TestWidget/>
            </div>
        </Provider>
    )
}