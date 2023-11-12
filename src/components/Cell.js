import React from 'react';
import styles from './Cell.module.css';
import { store } from '../store';
import { checkWinner } from './CheckWinner';

export const Cell = ({ id, value }) => {
	const click = (index) => {
		const { board, xTurn, turn, winner } = store.getState();
		const boardCopy = [...board];
		if (winner || boardCopy[index]) return;
		boardCopy[index] = xTurn ? 'X' : 'O';
		store.dispatch({
			type: 'SET_STATE',
			payload: {
				winner: winner,
				board: boardCopy,
				xTurn: !xTurn,
				turn: turn + 1,
			},
		});
		checkWinner();
	};

	return (
		<div id={id} className={styles.cell} onClick={(e) => click(e.target.id)}>
			{value}
		</div>
	);
};
