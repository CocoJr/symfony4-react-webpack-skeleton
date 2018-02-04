import {REQUEST_TASKS, REQUEST_TASK, RECEIVE_TASKS, RECEIVE_TASK} from '../actions/tasks';

export const tasksReducer = (state = {
    isFetching: false,
}, action) => {
    switch(action.type) {
        case REQUEST_TASKS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
            });
        case RECEIVE_TASKS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                tasks: action.tasks,
            });
        default:
            return state;
    }
};

export const taskReducer = (state = {
    isFetching: false,
    task: {},
}, action) => {
    switch(action.type) {
        case REQUEST_TASK:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
            });
        case RECEIVE_TASK:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                task: action.task,
            });
        default:
            return state;
    }
};