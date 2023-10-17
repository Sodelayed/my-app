import { useState } from 'react';

export const useRequestUpdateTask = (inputForNewTask, setInputForNewTask, refresh, setRefresh, tasks) => {
	const [closeOverlay, setCloseOverlay] = useState(true);

	const [taskId, setTaskId] = useState(0);

	const requestUpdateTask = () => {
		fetch(`http://localhost:3005/tasks/${taskId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: inputForNewTask,
			}),
		})
			.then(() => setRefresh(!refresh))
			.finally(() => {
				setCloseOverlay(!closeOverlay);
				setInputForNewTask('');
			});
	};
	const openModal = (target) => {
		setCloseOverlay(!closeOverlay);
		const targetTask = tasks.filter(({ id }) => target.id === `${id}`);
		setInputForNewTask(targetTask[0].task);
		setTaskId(target.id);
	};
	return { closeOverlay, setCloseOverlay, requestUpdateTask, openModal };
};
