import React, { useContext } from 'react';
import styles from '../../App.module.css';
import { AppContext } from '../../context';

export const SortContainer = () => {
	const { stateStorage, dispatch } = useContext(AppContext);
	return (
		<div className={styles.sortTask}>
			<div>Сортировать:</div>
			<label className={styles.switch}>
				<input
					onChange={() =>
						dispatch({ type: 'SET_CHECKED', payload: !stateStorage.checked })
					}
					checked={stateStorage.checked}
					type="checkbox"
				></input>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};
