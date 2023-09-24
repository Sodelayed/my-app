import React from 'react';
import styles from './Cell.module.css';

export const Cell = (props) => {
	return (
		<div className={styles.cell} onClick={props.onClick}>
			{props.value}
		</div>
	);
};
