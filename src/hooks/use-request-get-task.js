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
