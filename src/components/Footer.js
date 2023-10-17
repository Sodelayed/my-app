import React from 'react';
import { SearchContainer } from './SearchContainer';
import { SortContainer } from './SortContainer';
import styles from '../App.module.css';

export const Footer = ({ searchButton, setSearchButton, searchInputValue, setSearchInputValue, checked, setChecked }) => {
	return (
		<div className={styles.footer}>
			<SearchContainer
				searchButton={searchButton}
				setSearchButton={setSearchButton}
				searchInputValue={searchInputValue}
				setSearchInputValue={setSearchInputValue}
			/>
			<SortContainer checked={checked} setChecked={setChecked} />
		</div>
	);
};
