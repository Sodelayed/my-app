import React, { useContext } from 'react';
import styles from '../App.module.css';
import { AppContext } from '../context';
export const ModalOverlay = ({ closeOverlay, setCloseOverlay, requestUpdateTask }) => {
	const { stateStorage, dispatch } = useContext(AppContext);
	return (
		<div className={closeOverlay ? styles.overlayHidden : styles.overlay}>
			<div className={styles.deleteModal}>
				<h3 className={styles.deleteModalQuestion}>Измените название задачи</h3>
				<input
					className={styles.modalChanger}
					value={stateStorage.inputForNewTaskName}
					onChange={(e) =>
						dispatch({
							type: 'SET_INPUTFORNEWTASKNAME',
							payload: e.target.value,
						})
					}
				></input>
				<div className={styles.deleteButton}>
					<button
						className={styles.canselButton}
						onClick={() => setCloseOverlay(!closeOverlay)}
					>
						Отмена
					</button>
					<button className={styles.confirmButton} onClick={requestUpdateTask}>
						Изменить
					</button>
				</div>
			</div>
		</div>
	);
};
