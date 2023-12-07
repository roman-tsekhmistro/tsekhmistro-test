import React from 'react';
import styles from './App.module.scss';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
	return (
		<div className={styles.app_wrapper}>
			<AddTask />
			<TasksList />
		</div>
	);
}

export default App;
