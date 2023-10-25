import { useState } from 'react';
export const useRequestAddTask = ({ inputForNewTask, refreshTasksList, setRefreshTasksList }) => {
	const [addTaskError, setAddTaskError] = useState(false);

	const requestAddTask = () => {
		if (inputForNewTask !== '') {
			setAddTaskError(false);
			fetch('http://localhost:3005/tasks', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					task: inputForNewTask,
					discription: '',
				}),
			}).finally(setRefreshTasksList(!refreshTasksList));
		} else setAddTaskError(true);
	};

	return { requestAddTask, addTaskError };
};
