import React from 'react';
import { SearchContainer } from './SearchContainer';
import { SortContainer } from './SortContainer';
import styles from '../../App.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<SearchContainer />
			<SortContainer />
		</div>
	);
};
