export const useRequestDeleteTask = () => {
	const requestDelete = (id) => {
		fetch(`http://localhost:3005/tasks/${id}`, {
			method: 'DELETE',
		});
	};
	return requestDelete;
};
