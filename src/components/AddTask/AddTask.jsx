import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addTaskInTaskList } from '../../redux/actions';
import styles from './add-task.module.scss';

const CheckToDoTaskField = Yup.object().shape({
	task: Yup.string()
		.min(2, 'Too short!')
		.max(30, 'Too long!')
		.required('Required'),
});

export default function AddTask() {
	const randomId = () => Math.floor(Math.random() * 30);
	const dispatch = useDispatch();

	return (
		<Formik
			validationSchema={CheckToDoTaskField}
			initialValues={{ task: '' }}
			onSubmit={(values, { resetForm }) => {
				const task = {
					id: randomId(),
					title: values.task,
				};
				dispatch(addTaskInTaskList(task));
				resetForm({ values: '' });
			}}
		>
			{({ handleSubmit }) => (
				<Form className={styles.form}>
					<div className={styles.form__item}>
						<label htmlFor='task'>Enter your task:</label>
						<Field
							className={styles.input__item}
							id='task'
							type='task'
							name='task'
							placeholder='Your task'
						/>
						<ErrorMessage
							className={styles.error}
							name='task'
							component='div'
						/>
					</div>

					<button onClick={handleSubmit} className={styles.btn} type='submit'>
						Add
					</button>
				</Form>
			)}
		</Formik>
	);
}
