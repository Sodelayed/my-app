import React from 'react';
import styles from './Board.module.css';
import { Cell } from './Cell';
import { store } from '../store';

export const Board = () => {
	const { board } = store.getState();
	return (
		<div className={styles.board}>
			{board.map((el, index) => (
				<Cell key={index} id={index} value={el} />
			))}
		</div>
	);
};
