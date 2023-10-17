import { useEffect, useState } from 'react';

export const useRequestGetTask = (refresh, checked, searchButton, searchInputValue) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/tasks')
			.then((resolve) => resolve.json())
			.then((result) => {
				if (checked) {
					result.sort((a, b) => {
						if (a.task.toLowerCase() < b.task.toLowerCase()) {
							return -1;
						}
						if (a.task.toLowerCase() > b.task.toLowerCase()) {
							return 1;
						}
						return 0;
					});
				}
				if (searchButton) {
					console.log(searchInputValue);
					result = result.filter((el) => {
						if (el.task.toLowerCase().includes(searchInputValue.toLowerCase())) return 1;
						return 0;
					});
				}
				setTasks(result);
			});
	}, [refresh, checked, searchButton, searchInputValue]);

	return { tasks, setTasks };
};

export const useRequestAddTask = (value) => {
	const requestAddTask = () => {
		fetch('http://localhost:3005/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: value,
			}),
		});
	};

	return { requestAddTask };
};

export const useRequestUpdateTask = (changerValue, setChangerValue, refresh, setRefresh, id) => {
	const [closeOverlay, setCloseOverlay] = useState(true);
	const requestUpdateTask = () => {
		fetch(`http://localhost:3005/tasks/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: changerValue,
			}),
		})
			.then(() => setRefresh(!refresh))
			.finally(() => {
				setCloseOverlay(!closeOverlay);
				setChangerValue('');
			});
	};
	return { closeOverlay, setCloseOverlay, requestUpdateTask };
};

export const useRequestDeleteTask = (refresh, setRefresh) => {
	const requestDelete = (target) => {
		fetch(`http://localhost:3005/tasks/${target.id}`, {
			method: 'DELETE',
		}).then(() => setRefresh(!refresh));
	};
	return requestDelete;
};
