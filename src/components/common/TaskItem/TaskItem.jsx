import React from 'react';
import './task-item.module.scss';
export default function TaskItem({ id, task }) {
	return (
		<li>
			<p>{task}</p>
		</li>
	);
}
