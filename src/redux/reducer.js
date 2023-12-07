import {
	ADD_TODO_TASK,
	DELETE_TODO_TASK,
	GET_TASKS_FAILURE,
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
} from './actions';

const initialState = { tasks: [] };

export function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS_REQUEST:
			return { ...state };

		case GET_TASKS_SUCCESS:
			return { ...state, tasks: action.tasks };

		case GET_TASKS_FAILURE:
			return { ...state, error: action.error };

		case ADD_TODO_TASK:
			return { ...state, tasks: [action.task, ...state.tasks] };

		case DELETE_TODO_TASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.taskId),
			};

		default:
			return state;
	}
}
