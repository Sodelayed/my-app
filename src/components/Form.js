import React from 'react';
import styles from './Form.module.css';
import { useRequestAddTask } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputForNewTask } from '../selectors/appSelectors';
import { SET_INPUTFORNEWTASK } from '../actions/appActions';

export const Form = () => {
	const inputForNewTask = useSelector(selectInputForNewTask);
	const dispatch = useDispatch();
	const { requestAddTask } = useRequestAddTask();
	return (
		<>
			<div className={styles.todoHeader}>Todo List</div>
			<form className={styles.todoForm}>
				<input
					className={styles.todoInput}
					value={inputForNewTask}
					onChange={(e) => dispatch(SET_INPUTFORNEWTASK(e.target.value))}
					placeholder="Добавь новую задачу"
				></input>
				<button
					className={styles.addNewTask}
					onClick={requestAddTask}
					type="submit"
				>
					Добавить задачу
				</button>
			</form>
		</>
	);
};
