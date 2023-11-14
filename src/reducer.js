const initialState = {
	board: Array(9).fill(null),
	xTurn: true,
	turn: 0,
	winner: null,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'STATE_BETWEEN_TURN': {
			return {
				...state,
				board: action.payload,
				xTurn: !state.xTurn,
				turn: state.turn + 1,
			};
		}
		case 'REFRESH_GAME': {
			return initialState;
		}
		case 'SET_WINNER': {
			return {
				...state,
				winner: action.payload,
			};
		}
		default:
			return state;
	}
};
