export const useRequestDeleteTask = (stateStorage, dispatch) => {
	const requestDelete = (target) => {
		fetch(`http://localhost:3005/tasks/${target.id}`, {
			method: 'DELETE',
		}).then(() => dispatch({ type: 'SET_REFRESH', payload: !stateStorage.refresh }));
	};
	return requestDelete;
};
