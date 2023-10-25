import React from 'react';
import styles from './TaskName.module.css';

export const TaskName = ({ rightToChange, taskName, setTaskName, requestUpdateTask }) => {
	return (
		<textarea
			disabled={rightToChange}
			className={rightToChange ? styles.taskName : styles.taskNameChanger}
			id="taskName"
			value={taskName}
			onBlur={requestUpdateTask}
			onChange={(e) => setTaskName(e.target.value)}
		></textarea>
	);
};
