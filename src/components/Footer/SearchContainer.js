import React from 'react';
import styles from '../../App.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const SearchContainer = () => {
	const { stateStorage, dispatch } = useContext(AppContext);

	return (
		<div className={styles.searchContainer}>
			<button
				className={styles.searchButton}
				onClick={() =>
					dispatch({
						type: 'SET_SEARCHBUTTON',
						payload: !stateStorage.searchButton,
					})
				}
			>
				🔍︎
			</button>
			{stateStorage.searchButton && (
				<input
					className={styles.searchInput}
					value={stateStorage.searchInputValue}
					onChange={(e) =>
						dispatch({
							type: 'SET_SEARCHINPUTVALUE',
							payload: e.target.value,
						})
					}
				></input>
			)}
		</div>
	);
};
