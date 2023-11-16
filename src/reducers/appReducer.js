const initialAppState = {
	refresh: false,
	checked: false,
	searchButton: false,
	searchInputValue: '',
	inputForNewTask: '',
	inputForNewTaskName: '',
	closeOverlay: true,
	taskId: 0,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case 'SET_REFRESH': {
			return {
				...state,
				refresh: !state.refresh,
			};
		}
		case 'SET_CHECKED': {
			return {
				...state,
				checked: !state.checked,
			};
		}
		case 'SET_SEARCHBUTTON': {
			return {
				...state,
				searchButton: !state.searchButton,
			};
		}
		case 'SET_CLOSEOVERLAY': {
			return {
				...state,
				closeOverlay: !state.closeOverlay,
			};
		}
		case 'SET_INPUTFORNEWTASKNAME': {
			return {
				...state,
				inputForNewTaskName: action.payload,
			};
		}
		case 'SET_INPUTFORNEWTASK': {
			return {
				...state,
				inputForNewTask: action.payload,
			};
		}
		case 'SET_SEARCHINPUTVALUE': {
			return {
				...state,
				searchInputValue: action.payload,
			};
		}
		case 'STATE_AFTER_UPDATE': {
			return {
				...state,
				refresh: !state.refresh,
				closeOverlay: !state.closeOverlay,
			};
		}
		case 'STATE_BEFORE_UPDATE': {
			return {
				...state,
				closeOverlay: !state.closeOverlay,
				inputForNewTaskName: action.payload.delta1,
				taskId: action.payload.delta2,
			};
		}
		default:
			return state;
	}
};
