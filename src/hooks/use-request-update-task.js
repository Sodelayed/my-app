import { useState } from 'react';

export const useRequestUpdateTask = (stateStorage, dispatch, tasks) => {
	const [closeOverlay, setCloseOverlay] = useState(true);

	const [taskId, setTaskId] = useState(0);

	const requestUpdateTask = () => {
		fetch(`http://localhost:3005/tasks/${taskId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: stateStorage.inputForNewTaskName,
			}),
		})
			.then(() => dispatch({ type: 'SET_REFRESH', payload: !stateStorage.refresh }))
			.finally(() => {
				setCloseOverlay(!closeOverlay);
			});
	};
	const openModal = (target) => {
		setCloseOverlay(!closeOverlay);
		const targetTask = tasks.filter(({ id }) => target.id === `${id}`);
		dispatch({ type: 'SET_INPUTFORNEWTASKNAME', payload: targetTask[0].task });
		setTaskId(target.id);
	};
	return { closeOverlay, setCloseOverlay, requestUpdateTask, openModal };
};
