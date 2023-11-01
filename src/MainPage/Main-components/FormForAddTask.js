import React from 'react';
import styles from './FormForAddTask.module.css';

export const FormForAddTask = ({
	inputForNewTask,
	setInputForNewTask,
	requestAddTask,
	addTaskError,
}) => {
	return (
		<>
			<form className={styles.todoForm}>
				<input
					name="error"
					className={styles.todoInput}
					value={inputForNewTask}
					onChange={(e) => setInputForNewTask(e.target.value)}
					placeholder="Добавь новую задачу"
				></input>
				<button
					className={styles.addNewTask}
					type="button"
					onClick={() => {
						requestAddTask();
						setInputForNewTask('');
					}}
				>
					Добавить задачу
				</button>
			</form>
			{addTaskError && (
				<label className={styles.errorLabel} htmlFor="error">
					{' '}
					Введите название задачи!
				</label>
			)}
		</>
	);
};
