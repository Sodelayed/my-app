import React from 'react';
import styles from './TaskDiscription.module.css';

export const TaskDiscription = ({
	rightToChange,
	discription,
	setDiscription,
	requestUpdateTask,
}) => {
	return (
		<>
			<label className={styles.taskDiscription} htmlFor="discription">
				Описание задачи:
			</label>
			<textarea
				disabled={rightToChange}
				className={rightToChange ? styles.discription : styles.discriptionChanger}
				id="discription"
				value={discription}
				onBlur={requestUpdateTask}
				onChange={(e) => setDiscription(e.target.value)}
			></textarea>
		</>
	);
};
