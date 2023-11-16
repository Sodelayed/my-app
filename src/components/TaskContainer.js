import React from 'react';
import styles from './TaskContainer.module.css';
import { useRequestDeleteTask, useOpenModal } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../selectors/tasksSelectors';
import { DELETE_TASK } from '../actions/tasksActions';

export const TaskContainer = () => {
	const tasks = useSelector(selectTasks);
	const requestDelete = useRequestDeleteTask();
	const dispatch = useDispatch();
	const { openModal } = useOpenModal();
	return (
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
							onClick={(e) => {
								requestDelete(e.target.id);
								dispatch(DELETE_TASK(e.target.id));
							}}
						>
							✖
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
