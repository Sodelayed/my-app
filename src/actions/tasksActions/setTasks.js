export const getTask = (checked, searchButton, searchInputValue) => {
	return (dispatch) => {
		return fetch('http://localhost:3005/tasks')
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
				dispatch({
					type: 'SET_TASKS',
					payload: result,
				});
			});
	};
};
