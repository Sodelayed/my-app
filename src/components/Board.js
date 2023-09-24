import React from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.css';
import { Cell } from './Cell';

export const Board = ({ cells, click }) => {
	return (
		<div className={styles.board}>
			{cells.map((cell, index) => (
				<Cell key={index} value={cell} onClick={() => click(index)} />
			))}
		</div>
	);
};

Board.propTypes = {
	cells: PropTypes.array,
	click: PropTypes.func,
};
