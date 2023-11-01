import React from 'react';
import styles from './SortContainer.module.css';

export const SortContainer = ({ checked, setChecked }) => {
	return (
		<div className={styles.sortTask}>
			<div>Сортировать:</div>
			<label className={styles.switch}>
				<input
					onChange={() => setChecked(!checked)}
					checked={checked}
					type="checkbox"
				></input>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};
