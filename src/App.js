import React, { useState } from 'react';
import { store } from './store';
import { Board } from './components/Board';

import styles from './App.module.css';
export const App = () => {
	const [arr, setArr] = useState(store.getState());

	const func = () => {
		store.dispatch({ type: 'SET_DEFAULT' });
		setArr(store.getState());
	};

	return (
		<div className={styles.wrapper}>
			<p className={styles.gameInfo}>
				{arr.winner
					? `Победитель ${arr.winner} !`
					: arr.turn === 9
					? 'Ничья!'
					: `Сейчас ходит ${arr.xTurn ? 'X' : 'O'}`}
			</p>
			<div onClick={func}>
				<Board />
			</div>
			<button
				className={
					arr.winner
						? styles.refresh
						: arr.turn === 9
						? styles.refresh
						: styles.inv
				}
				onClick={() => {
					store.dispatch({ type: 'SET_INITIALSTATE' });
					setArr(store.getState());
				}}
			>
				Начать заново
			</button>
		</div>
	);
};
