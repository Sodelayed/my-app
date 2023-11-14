import React from 'react';
import { Board } from './components/Board';
import { useSelector, useDispatch } from 'react-redux';
import { REFRESH_GAME } from './actions';
import { selectWinner, selectTurn, selectXTurn } from './selectors';

import styles from './App.module.css';
export const App = () => {
	const winner = useSelector(selectWinner);
	const turn = useSelector(selectTurn);
	const xTurn = useSelector(selectXTurn);
	const dispatch = useDispatch();

	const refreshGame = () => {
		dispatch(REFRESH_GAME);
	};

	const headerInfo = () => {
		if (winner) {
			return `Победитель ${winner} !`;
		} else if (turn === 9) {
			return 'Ничья!';
		} else {
			return `Сейчас ходит ${xTurn ? 'X' : 'O'}`;
		}
	};

	return (
		<div className={styles.wrapper}>
			<p className={styles.gameInfo}>{headerInfo()}</p>
			<Board />
			<button
				className={winner || turn === 9 ? styles.refresh : styles.inv}
				onClick={refreshGame}
			>
				Начать заново
			</button>
		</div>
	);
};
