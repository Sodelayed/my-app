import { store } from '../store';

export function checkWinner() {
	const { board } = store.getState();
	const winCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < winCombos.length; i++) {
		const [a, b, c] = winCombos[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			store.dispatch({ type: 'SET_WINNER', payload: board[a] });
		}
	}
}
