import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className={styles.error404}>
			<h1 className={styles.errorTitle}> Такой страницы не существует</h1>
			<Link className={styles.link404} to="/">
				Перейти на главную страницу
			</Link>
		</div>
	);
};
