import { useDispatch } from 'react-redux';
import { SET_WINNER } from '../actions/index.js';
import WIN_COMBOS from './winCombo.js';

export function useCheckWinner() {
	const dispatch = useDispatch();

	const checkWinner = (board) => {
		for (let i = 0; i < WIN_COMBOS.length; i++) {
			const [a, b, c] = WIN_COMBOS[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				dispatch(SET_WINNER(board[a]));
			}
		}
	};
	return { checkWinner };
}
