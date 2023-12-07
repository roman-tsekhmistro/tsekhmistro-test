import { BASE_URL } from './config';

export function getToDoItems(tasksQuantity) {
	return fetch(`${BASE_URL}/todos?_start=${tasksQuantity}&_limit=20`).then(
		(tasks) => tasks.json()
	);
}
