import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cell.module.css';
import { useCheckWinner } from '../utils/useCheckWinner.js';
import { selectBoard, selectXTurn, selectWinner } from '../selectors';
import { STATE_BETWEEN_TURN } from '../actions';

export const Cell = ({ id, value }) => {
	const winner = useSelector(selectWinner);
	const board = useSelector(selectBoard);
	const xTurn = useSelector(selectXTurn);
	const dispatch = useDispatch();
	const { checkWinner } = useCheckWinner();

	const click = (index) => {
		console.log(winner);
		const boardCopy = [...board];
		if (winner || boardCopy[index]) return;
		boardCopy[index] = xTurn ? 'X' : 'O';
		checkWinner(boardCopy);
		dispatch(STATE_BETWEEN_TURN(boardCopy));
	};

	return (
		<div id={id} className={styles.cell} onClick={(e) => click(e.target.id)}>
			{value}
		</div>
	);
};
