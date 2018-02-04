import { takeLatest } from 'redux-saga/effects';
import { REQUEST_TASKS, REQUEST_TASK } from '../actions/tasks';
import { fetchTasks, fetchTask } from './tasks';

function* saga()
{
    yield takeLatest(REQUEST_TASKS, fetchTasks);
    yield takeLatest(REQUEST_TASK, fetchTask);
}

export default saga;