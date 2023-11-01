import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FiEdit, FiTrash } from 'react-icons/fi';
import styles from './Header.module.css';
export const Header = ({ id, rightToChange, setRightToChange, requestDelete }) => {
	return (
		<header>
			<Link to="/">
				<BiArrowBack className={styles.linkButton} />
			</Link>
			<h1 className={styles.taskHeader}> Задача №{id}</h1>
			<div className={styles.buttons}>
				<FiEdit className={styles.editButton} onClick={() => setRightToChange(!rightToChange)} />
				<Link to="/">
					<FiTrash className={styles.deleteButton} onClick={requestDelete} />
				</Link>
			</div>
		</header>
	);
};
