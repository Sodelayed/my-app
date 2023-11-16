import React from 'react';
import styles from './ModalOverlay.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCloseOverlay,
	selectInputForNewTaskName,
	selectTaskId,
} from '../selectors/appSelectors';
import {
	SET_CLOSEOVERLAY,
	SET_INPUTFORNEWTASKNAME,
	STATE_AFTER_UPDATE,
} from '../actions/appActions';
import { useRequestUpdateTask } from '../hooks';

export const ModalOverlay = () => {
	const closeOverlay = useSelector(selectCloseOverlay);
	const inputForNewTaskName = useSelector(selectInputForNewTaskName);
	const taskId = useSelector(selectTaskId);
	const dispatch = useDispatch();

	const { requestUpdateTask } = useRequestUpdateTask();

	return (
		<div className={closeOverlay ? styles.overlayHidden : styles.overlay}>
			<div className={styles.deleteModal}>
				<h3 className={styles.deleteModalQuestion}>Измените название задачи</h3>
				<input
					className={styles.modalChanger}
					value={inputForNewTaskName}
					onChange={(e) => dispatch(SET_INPUTFORNEWTASKNAME(e.target.value))}
				></input>
				<div>
					<button
						className={styles.canselButton}
						onClick={() => dispatch(SET_CLOSEOVERLAY)}
					>
						Отмена
					</button>
					<button
						className={styles.confirmButton}
						onClick={() => {
							dispatch(STATE_AFTER_UPDATE(taskId, inputForNewTaskName));
							requestUpdateTask();
						}}
					>
						Изменить
					</button>
				</div>
			</div>
		</div>
	);
};
