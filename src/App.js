import React, { useState } from 'react';
import { Board } from './components/Board';
import { checkWinner } from './components/CheckWinner';
import styles from './App.module.css';

export const App = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xTurn, setXTurn] = useState(true);
	const winner = checkWinner(board);

	const click = (index) => {
		const boardCopy = [...board];
		if (winner || boardCopy[index]) return;
		boardCopy[index] = xTurn ? 'X' : 'O';
		setBoard(boardCopy);
		setXTurn(!xTurn);
	};

	return (
		<div className={styles.wrapper}>
			<p className={styles.gameInfo}>{winner ? `Победитель ${winner} !` : `Сейчас ходит ${xTurn ? 'X' : 'O'}`}</p>
			<Board cells={board} click={click} />
			<button
				className={winner ? styles.refresh : styles.inv}
				onClick={() => {
					setBoard(Array(9).fill(null));
					setXTurn(xTurn ? xTurn : !xTurn);
				}}
			>
				Начать заново
			</button>
		</div>
	);
};
