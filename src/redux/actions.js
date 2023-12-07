export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const ADD_TODO_TASK = 'ADD_TODO_TASK';
export const DELETE_TODO_TASK = 'DELETE_TODO_TASK';

export const getTasksRequest = () => ({
	type: GET_TASKS_REQUEST,
});

export const getTasksSuccess = (tasks) => ({
	type: GET_TASKS_SUCCESS,
	tasks,
});

export const getTasksFailure = (error) => ({
	type: GET_TASKS_FAILURE,
	error,
});

export const addTaskInTaskList = (task) => ({
	type: ADD_TODO_TASK,
	task,
});

export const deleteTaskInTaskList = (taskId) => ({
	type: DELETE_TODO_TASK,
	taskId,
});
