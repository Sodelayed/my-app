import React from 'react';
import { SearchContainer, SortContainer } from './FooterComponents';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<SearchContainer />
			<SortContainer />
		</div>
	);
};
