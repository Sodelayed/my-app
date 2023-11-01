import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';
import { useRequestGetTasksList, useRequestAddTask } from '../hooks';
import { Footer } from './Main-components/Footer';
import { FormForAddTask } from './Main-components/FormForAddTask';

export const MainPage = () => {
	const [refreshTasksList, setRefreshTasksList] = useState(false);
	const [checked, setChecked] = useState(false);
	const [searchButton, setSearchButton] = useState(false);
	const [searchInputValue, setSearchInputValue] = useState('');

	const [inputForNewTask, setInputForNewTask] = useState('');

	const { tasks } = useRequestGetTasksList(
		checked,
		searchButton,
		searchInputValue,
		refreshTasksList,
	);
	const { requestAddTask, addTaskError } = useRequestAddTask({
		inputForNewTask,
		refreshTasksList,
		setRefreshTasksList,
	});

	return (
		<>
			<div className={styles.todoList}>
				<div className={styles.todoHeader}>Todo List</div>
				<FormForAddTask
					inputForNewTask={inputForNewTask}
					setInputForNewTask={setInputForNewTask}
					requestAddTask={requestAddTask}
					addTaskError={addTaskError}
				/>
				<div className={styles.tasksContainer}>
					{tasks.map(({ id, task }) => {
						if (task.length > 49) {
							task = task.slice(0, 47) + '...';
						}
						return (
							<Link key={id} to={`/tasks/${id}`}>
								<div className={styles.task}>{task}</div>
							</Link>
						);
					})}
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
		</>
	);
};
