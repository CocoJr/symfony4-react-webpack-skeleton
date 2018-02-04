export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REQUEST_TASK = 'REQUEST_TASK';
export const RECEIVE_TASK = 'RECEIVE_TASK';

export function requestTasks()
{
    return {
        type: REQUEST_TASKS,
        isFetching: true,
        tasks: [],
    };
}

export function receiveTasks(tasks)
{
    return {
        type: RECEIVE_TASKS,
        isFetching: false,
        tasks: tasks,
    };
}

export function requestTask(id)
{
    return {
        type: REQUEST_TASK,
        isFetching: true,
        task: {
            id: id
        }
    };
}

export function receiveTask(task)
{
    return {
        type: RECEIVE_TASK,
        isFetching: false,
        task: task,
    };
}
