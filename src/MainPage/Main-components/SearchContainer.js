import React from 'react';
import styles from './SearchContainer.module.css';

export const SearchContainer = ({
	searchButton,
	setSearchButton,
	searchInputValue,
	setSearchInputValue,
}) => {
	const onChangeSearchInput = ({ target }) => setSearchInputValue(target.value);

	return (
		<div className={styles.searchContainer}>
			<button
				className={styles.searchButton}
				onClick={() => setSearchButton(!searchButton)}
			>
				🔍︎
			</button>
			{searchButton && (
				<input
					className={styles.searchInput}
					value={searchInputValue}
					onChange={onChangeSearchInput}
				></input>
			)}
		</div>
	);
};
