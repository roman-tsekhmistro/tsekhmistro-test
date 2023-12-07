import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/thunk/tasks.js';
import TaskItem from '../common/TaskItem';
import Pagination from '../Pagination';
import styles from './tasks-list.module.scss';

export default function TasksList() {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	return (
		<>
			<ul className={styles.list__wrapper}>
				{tasks.map((task) => {
					const { id, title } = task;

					return <TaskItem key={id} id={id} task={title} />;
				})}
			</ul>

			<Pagination />
		</>
	);
}
