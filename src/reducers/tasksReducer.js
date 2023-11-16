const initialTaskState = {
	tasks: [],
};

export const tasksReducer = (state = initialTaskState, action) => {
	console.log(state);
	switch (action.type) {
		case 'SET_TASKS': {
			return {
				tasks: action.payload,
			};
		}
		default:
			return state;
	}
};
