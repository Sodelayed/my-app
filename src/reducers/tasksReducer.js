const initialTaskState = {
	tasks: [],
};

export const tasksReducer = (state = initialTaskState, action) => {
	switch (action.type) {
		case 'SET_TASKS': {
			return {
				tasks: action.payload,
			};
		}
		case 'DELETE_TASK': {
			const deletedId = action.payload;
			const newState = state.tasks.filter(({ task, id }) => id !== deletedId);
			return {
				tasks: newState,
			};
		}
		case 'ADD_TASK': {
			return {
				tasks: [
					...state.tasks,
					{
						task: action.payload,
						id: state.tasks.length + 1,
					},
				],
			};
		}
		case 'STATE_AFTER_UPDATE': {
			const newState = state.tasks.map((task) =>
				task.id === Number(action.payload.delta1)
					? { ...task, task: action.payload.delta2 }
					: task,
			);
			return {
				tasks: newState,
			};
		}
		default:
			return state;
	}
};
