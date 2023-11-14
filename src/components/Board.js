import React from 'react';
import styles from './Board.module.css';
import { Cell } from './Cell';
import { useSelector } from 'react-redux';
import { selectBoard } from '../selectors';

export const Board = () => {
	const board = useSelector(selectBoard);
	return (
		<div className={styles.board}>
			{board.map((el, index) => (
				<Cell key={index} id={index} value={el} />
			))}
		</div>
	);
};
