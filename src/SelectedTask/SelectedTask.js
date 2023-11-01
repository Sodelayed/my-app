import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SelectedTask.module.css';
import { useRequestDeleteTask, useRequestUpdateTask, useRequestGetTask } from '../hooks';
import { Header } from './SelectedTask-components/Header';
import { TaskName } from './SelectedTask-components/TaskName';
import { TaskDiscription } from './SelectedTask-components/TaskDiscription';

export const SelectedTask = () => {
	const { id } = useParams();

	const [rightToChange, setRightToChange] = useState(true);

	const { taskName, discription, setTaskName, setDiscription } = useRequestGetTask(id);

	const { requestUpdateTask } = useRequestUpdateTask({
		id,
		taskName,
		discription,
		rightToChange,
		setRightToChange,
	});
	const { requestDelete } = useRequestDeleteTask(id);

	return (
		<div className={styles.taskBlock}>
			<Header
				id={id}
				rightToChange={rightToChange}
				setRightToChange={setRightToChange}
				requestDelete={requestDelete}
			/>
			<TaskName
				rightToChange={rightToChange}
				taskName={taskName}
				setTaskName={setTaskName}
				requestUpdateTask={requestUpdateTask}
			/>
			<TaskDiscription
				rightToChange={rightToChange}
				discription={discription}
				setDiscription={setDiscription}
				requestUpdateTask={requestUpdateTask}
			/>
		</div>
	);
};
