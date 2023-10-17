export const useRequestDeleteTask = (refresh, setRefresh) => {
	const requestDelete = (target) => {
		fetch(`http://localhost:3005/tasks/${target.id}`, {
			method: 'DELETE',
		}).then(() => setRefresh(!refresh));
	};
	return requestDelete;
};
