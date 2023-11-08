import React, { useState } from 'react';
import styles from './App.module.css';
import { useRequestGetTask, useRequestUpdateTask, useRequestDeleteTask } from './hooks';
import { Footer } from './components/Footer/Footer';
import { AppContext } from './context';
import { ModalOverlay } from './components/ModalOverlay';
import Form from './components/Form';
export const TodoWithJSONServer = () => {
	const [stateStorage, setStateStorage] = useState({
		refresh: false,
		checked: false,
		searchButton: false,
		searchInputValue: '',
		inputForNewTask: '',
		inputForNewTaskName: '',
	});

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case 'SET_REFRESH': {
				setStateStorage({
					...stateStorage,
					refresh: payload,
				});
				break;
			}
			case 'SET_CHECKED': {
				setStateStorage({
					...stateStorage,
					checked: payload,
				});
				break;
			}
			case 'SET_SEARCHBUTTON': {
				setStateStorage({
					...stateStorage,
					searchButton: payload,
				});
				break;
			}
			case 'SET_SEARCHINPUTVALUE': {
				setStateStorage({
					...stateStorage,
					searchInputValue: payload,
				});
				break;
			}
			case 'SET_INPUTFORNEWTASK': {
				setStateStorage({
					...stateStorage,
					inputForNewTask: payload,
				});
				break;
			}
			case 'SET_INPUTFORNEWTASKNAME': {
				setStateStorage({
					...stateStorage,
					inputForNewTaskName: payload,
				});
				break;
			}
			default:
			//Ничего
		}
	};

	const { tasks } = useRequestGetTask(
		stateStorage.refresh,
		stateStorage.checked,
		stateStorage.searchButton,
		stateStorage.searchInputValue,
	);

	const requestDelete = useRequestDeleteTask(stateStorage, dispatch);
	const { closeOverlay, setCloseOverlay, requestUpdateTask, openModal } =
		useRequestUpdateTask(stateStorage, dispatch, tasks);

	return (
		<AppContext.Provider value={{ stateStorage, dispatch }}>
			<div className={styles.todoList}>
				<ModalOverlay
					closeOverlay={closeOverlay}
					setCloseOverlay={setCloseOverlay}
					requestUpdateTask={requestUpdateTask}
				/>
				<Form />
				<div className={styles.tasksContainer}>
					{tasks.map(({ id, task }) => (
						<div className={styles.task} key={id}>
							<div id={id}>{task}</div>
							<div>
								<button
									id={id}
									className={styles.changer}
									onClick={(e) => openModal(e.target)}
								>
									✎
								</button>
								<button
									id={id}
									className={styles.deleter}
									onClick={(e) => requestDelete(e.target)}
								>
									✖
								</button>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		</AppContext.Provider>
	);
};
