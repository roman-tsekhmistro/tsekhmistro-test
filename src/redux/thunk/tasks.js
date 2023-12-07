import { getToDoItems } from '../../api/todo';
import { getTasksFailure, getTasksRequest, getTasksSuccess } from '../actions';

export const fetchTasks =
	(start = 0) =>
	(dispatch) => {
		dispatch(getTasksRequest());

		try {
			getToDoItems(start).then((tasks) => dispatch(getTasksSuccess(tasks)));
		} catch (error) {
			dispatch(getTasksFailure(error));
		}
	};
