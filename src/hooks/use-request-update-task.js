import { selectInputForNewTaskName, selectTaskId } from '../selectors/appSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { STATE_AFTER_UPDATE } from '../actions/appActions';

export const useRequestUpdateTask = () => {
	const inputForNewTaskName = useSelector(selectInputForNewTaskName);
	const taskId = useSelector(selectTaskId);
	const dispatch = useDispatch();

	const requestUpdateTask = () => {
		fetch(`http://localhost:3005/tasks/${taskId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: inputForNewTaskName,
			}),
		}).then(() => dispatch(STATE_AFTER_UPDATE));
	};

	return { requestUpdateTask };
};
