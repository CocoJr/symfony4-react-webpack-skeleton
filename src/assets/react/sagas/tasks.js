import { call, put } from 'redux-saga/effects';
import 'isomorphic-fetch';

import {receiveTasks, receiveTask} from "../actions/tasks";

export function* fetchTasks(action)
{
    try {
        const response = yield call(() => {
            return fetch(API_V1_BASE_URL + '/tasks', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok !== undefined && response.ok === false) {
                        let error = new Error(response.statusText || response.status);
                        error.response = response;

                        return Promise.reject(error);
                    }

                    return response.json();
                })
                .then(response => response.tasks)
                .catch(error => console.error(error))
        });

        yield put(receiveTasks(response));
    } catch (e) {
        console.error(e);
    }
}

export function* fetchTask(action)
{
    try {
        const response = yield call(() => {
            return fetch(API_V1_BASE_URL + '/tasks/' + action.task.id, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (response.ok !== undefined && response.ok === false) {
                        let error = new Error(response.statusText || response.status);
                        error.response = response;

                        return Promise.reject(error);
                    }

                    return response.json();
                })
                .then(response => response.task)
                .catch(error => console.error(error))
        });

        yield put(receiveTask(response));
    } catch (e) {
        console.error(e);
    }
}
