export const useRequestDeleteTask = (id) => {
	const requestDelete = () => {
		fetch(`http://localhost:3005/tasks/${id}`, {
			method: 'DELETE',
		});
	};
	return { requestDelete };
};
