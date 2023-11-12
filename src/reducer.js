const initialState = {
	board: Array(9).fill(null),
	xTurn: true,
	turn: 0,
	winner: null,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_STATE': {
			return payload;
		}
		case 'SET_INITIALSTATE': {
			return initialState;
		}
		case 'SET_WINNER': {
			return {
				...state,
				winner: payload,
			};
		}
		default:
			return state;
	}
};
