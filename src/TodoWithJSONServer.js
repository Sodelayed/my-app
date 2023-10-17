import React, { useState } from 'react';
import styles from './App.module.css';
import { useRequestGetTask, useRequestAddTask, useRequestUpdateTask, useRequestDeleteTask } from './hooks';
import { Footer } from './components/Footer';
export const TodoWithJSONServer = () => {
	const [refresh, setRefresh] = useState(false);
	const [checked, setChecked] = useState(false);
	const [searchButton, setSearchButton] = useState(false);
	const [searchInputValue, setSearchInputValue] = useState('');
	const [inputForNewTaskName, setInputForNewTaskName] = useState('');

	const [inputForNewTask, setInputForNewTask] = useState('');

	const { tasks } = useRequestGetTask(refresh, checked, searchButton, searchInputValue);
	const { requestAddTask } = useRequestAddTask(inputForNewTask);
	const requestDelete = useRequestDeleteTask(refresh, setRefresh);
	const { closeOverlay, setCloseOverlay, requestUpdateTask, openModal } = useRequestUpdateTask(
		inputForNewTaskName,
		setInputForNewTaskName,
		refresh,
		setRefresh,
		tasks,
	);

	return (
		<div className={styles.todoList}>
			<div className={closeOverlay ? styles.overlayHidden : styles.overlay}>
				<div className={styles.deleteModal}>
					<h3 className={styles.deleteModalQuestion}>Измените название задачи</h3>
					<input
						className={styles.modalChanger}
						value={inputForNewTaskName}
						onChange={(e) => setInputForNewTaskName(e.target.value)}
					></input>
					<div className={styles.deleteButton}>
						<button className={styles.canselButton} onClick={() => setCloseOverlay(!closeOverlay)}>
							Отмена
						</button>
						<button className={styles.confirmButton} onClick={requestUpdateTask}>
							Изменить
						</button>
					</div>
				</div>
			</div>
			<div className={styles.todoHeader}>Todo List</div>
			<form className={styles.todoForm}>
				<input
					className={styles.todoInput}
					value={inputForNewTask}
					onChange={(e) => setInputForNewTask(e.target.value)}
					placeholder="Добавь новую задачу"
				></input>
				<button className={styles.addNewTask} onClick={requestAddTask} type="submit">
					Добавить задачу
				</button>
			</form>
			<div className={styles.tasksContainer}>
				{tasks.map(({ id, task }) => (
					<div className={styles.task} key={id}>
						<div id={id}>{task}</div>
						<div>
							<button id={id} className={styles.changer} onClick={(e) => openModal(e.target)}>
								✎
							</button>
							<button id={id} className={styles.deleter} onClick={(e) => requestDelete(e.target)}>
								✖
							</button>
						</div>
					</div>
				))}
			</div>
			<Footer
				searchButton={searchButton}
				setSearchButton={setSearchButton}
				searchInputValue={searchInputValue}
				setSearchInputValue={setSearchInputValue}
				checked={checked}
				setChecked={setChecked}
			/>
		</div>
	);
};
