import React from 'react';
import styles from './TaskContainer.module.css';
import { useRequestDeleteTask, useOpenModal } from '../hooks';
import { useSelector } from 'react-redux';
import { selectTasks } from '../selectors/tasksSelectors';

export const TaskContainer = () => {
	const tasks = useSelector(selectTasks);
	const requestDelete = useRequestDeleteTask();

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
