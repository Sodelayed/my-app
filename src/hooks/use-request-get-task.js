import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestGetTasksList = (
	checked,
	searchButton,
	searchInputValue,
	refreshTasksList,
) => {
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
					result = result.filter((el) => {
						if (
							el.task.toLowerCase().includes(searchInputValue.toLowerCase())
						)
							return 1;
						return 0;
					});
				}
				setTasks(result);
			});
	}, [refreshTasksList, checked, searchButton, searchInputValue]);

	return { tasks };
};

export const useRequestGetTask = (id) => {
	const [taskName, setTaskName] = useState('');
	const [discription, setDiscription] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		fetch(`http://localhost:3005/tasks/${id}`)
			.then((resolve) => resolve.json())
			.then((result) => {
				if (result.task === undefined) {
					return navigate('/404');
				}
				setTaskName(result.task);
				setDiscription(result.discription);
			});
	}, [id, navigate]);
	return { taskName, discription, setTaskName, setDiscription };
};
