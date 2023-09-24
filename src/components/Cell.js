import React from 'react';
import styles from './Cell.module.css';
import PropTypes from 'prop-types';

export const Cell = ({ value, onClick }) => {
	return (
		<div className={styles.cell} onClick={onClick}>
			{value}
		</div>
	);
};

Cell.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func,
};
