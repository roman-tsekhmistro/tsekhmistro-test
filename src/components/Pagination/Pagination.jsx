import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/thunk/tasks';
import styles from './pagination.module.scss';

export default function Pagination() {
	const [activePage, setActivePage] = useState(1);
	const dispatch = useDispatch();

	const handleNextPagesClick = (pageNum) => {
		setActivePage(pageNum);
		dispatch(fetchTasks(pageNum * 6 - 6));
	};

	return (
		<div className={styles.footer}>
			{[...Array(5).keys()].map((element) => {
				return (
					<button
						className={classNames(styles.btn, {
							[styles.active__item]: activePage === element + 1,
						})}
						key={element + 1}
						onClick={() => {
							handleNextPagesClick(element + 1);
						}}
					>
						{element + 1}
					</button>
				);
			})}
		</div>
	);
}
