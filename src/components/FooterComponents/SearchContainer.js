import React from 'react';
import styles from './SearchContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchButton, selectSearchInputValue } from '../../selectors/appSelectors';
import { SET_SEARCHBUTTON, SET_SEARCHINPUTVALUE } from '../../actions/appActions';

export const SearchContainer = () => {
	const searchButton = useSelector(selectSearchButton);
	const searchInputValue = useSelector(selectSearchInputValue);
	const dispatch = useDispatch();
	return (
		<div className={styles.searchContainer}>
			<button
				className={styles.searchButton}
				onClick={() => dispatch(SET_SEARCHBUTTON)}
			>
				🔍︎
			</button>
			{searchButton && (
				<input
					className={styles.searchInput}
					value={searchInputValue}
					onChange={(e) => dispatch(SET_SEARCHINPUTVALUE(e.target.value))}
				/>
			)}
		</div>
	);
};
