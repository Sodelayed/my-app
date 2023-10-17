import React, { useState } from 'react';
import styles from './App.module.css';
import { useRequestGetTask, useRequestAddTask, useRequestUpdateTask, useRequestDeleteTask } from './components/hooks.js';
export const TodoWithJSONServer = () => {
	const [value, setValue] = useState('');
	const [inputForNewTask, setInputForNewTask] = useState('');
	const [refresh, setRefresh] = useState(false);
	const [taskId, setTaskId] = useState(0);
	const [checked, setChecked] = useState(false);
	const [searchButton, setSearchButton] = useState(false);
	const [searchInputValue, setSearchInputValue] = useState('');

	const onChange = ({ target }) => setValue(target.value);
	const onChangeTaskName = ({ target }) => setInputForNewTask(target.value);
	const onChangeSearchInput = ({ target }) => setSearchInputValue(target.value);

	const openModal = ({ target }) => {
		setCloseOverlay(!closeOverlay);
		const targetTask = tasks.filter(({ id }) => target.id === `${id}`);
		setInputForNewTask(targetTask[0].task);
		setTaskId(target.id);
	};

	const { tasks } = useRequestGetTask(refresh, checked, searchButton, searchInputValue);
	const { requestAddTask } = useRequestAddTask(value);
	const requestDelete = useRequestDeleteTask(refresh, setRefresh);
	const { closeOverlay, setCloseOverlay, requestUpdateTask } = useRequestUpdateTask(
		inputForNewTask,
		setInputForNewTask,
		refresh,
		setRefresh,
		taskId,
	);

	return (
		<div className={styles.todoList}>
			<div className={closeOverlay ? styles.overlayHidden : styles.overlay}>
				<div className={styles.deleteModal}>
					<h3 className={styles.deleteModalQuestion}>Измените название задачи</h3>
					<input className={styles.modalChanger} value={inputForNewTask} onChange={onChangeTaskName}></input>
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
				<input className={styles.todoInput} value={value} onChange={onChange} placeholder="Добавь новую задачу"></input>
				<button className={styles.addNewTask} onClick={requestAddTask} type="submit">
					Добавить задачу
				</button>
			</form>
			<div className={styles.tasksContainer}>
				{tasks.map(({ id, task }) => (
					<div className={styles.task} key={id}>
						<div id={id}>{task}</div>
						<div>
							<button id={id} className={styles.changer} onClick={openModal}>
								✎
							</button>
							<button id={id} className={styles.deleter} onClick={(e) => requestDelete(e.target)}>
								✖
							</button>
						</div>
					</div>
				))}
			</div>
			<div className={styles.footer}>
				<div className={styles.searchContainer}>
					<button className={styles.searchButton} onClick={() => setSearchButton(!searchButton)}>
						🔍︎
					</button>
					{searchButton && <input className={styles.searchInput} value={searchInputValue} onChange={onChangeSearchInput}></input>}
				</div>
				<div className={styles.sortTask}>
					<div>Сортировать:</div>
					<label className={styles.switch}>
						<input onChange={() => setChecked(!checked)} checked={checked} type="checkbox"></input>
						<span className={styles.slider}></span>
					</label>
				</div>
			</div>
		</div>
	);
};
