import React from 'react';
import styles from './SortContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectChecked } from '../../selectors/appSelectors';
import { SET_CHECKED } from '../../actions/appActions';

export const SortContainer = () => {
	const checked = useSelector(selectChecked);
	const dispatch = useDispatch();
	return (
		<div className={styles.sortTask}>
			<div>Сортировать:</div>
			<label className={styles.switch}>
				<input
					onChange={() => dispatch(SET_CHECKED)}
					checked={checked}
					type="checkbox"
				></input>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};
