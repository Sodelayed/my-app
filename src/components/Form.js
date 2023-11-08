import React, { useContext } from 'react';
import styles from '../App.module.css';
import { AppContext } from '../context';
import { useRequestAddTask } from '../hooks';

const Form = () => {
	const { stateStorage, dispatch } = useContext(AppContext);
	const { requestAddTask } = useRequestAddTask(stateStorage.inputForNewTask);
	return (
		<>
			<div className={styles.todoHeader}>Todo List</div>
			<form className={styles.todoForm}>
				<input
					className={styles.todoInput}
					value={stateStorage.inputForNewTask}
					onChange={(e) =>
						dispatch({ type: 'SET_INPUTFORNEWTASK', payload: e.target.value })
					}
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

export default Form;
