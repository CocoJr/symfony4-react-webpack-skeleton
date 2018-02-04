import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { taskReducer, tasksReducer } from './tasks';
import { appReducer } from './app';

const reducers = combineReducers({
    appReducer,
    taskReducer,
    tasksReducer,
    form: formReducer,
});

export default reducers;