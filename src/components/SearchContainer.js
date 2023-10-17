import React, { useState } from 'react';
import styles from '../App.module.css';

export const SearchContainer = () => {
	const [searchButton, setSearchButton] = useState(false);
	const [searchInputValue, setSearchInputValue] = useState('');
	const onChangeSearchInput = ({ target }) => setSearchInputValue(target.value);

	return (
		<div className={styles.searchContainer}>
			<button className={styles.searchButton} onClick={() => setSearchButton(!searchButton)}>
				🔍︎
			</button>
			{searchButton && <input className={styles.searchInput} value={searchInputValue} onChange={onChangeSearchInput}></input>}
		</div>
	);
};
