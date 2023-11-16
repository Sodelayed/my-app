import React from 'react';
import styles from './TodoWithJSONServer.module.css';
import { useRequestGetTask } from './hooks';
import { Footer, ModalOverlay, Form, TaskContainer } from './components';

export const TodoWithJSONServer = () => {
	useRequestGetTask();

	return (
		<div className={styles.todoList}>
			<ModalOverlay />
			<Form />
			<TaskContainer />
			<Footer />
		</div>
	);
};
