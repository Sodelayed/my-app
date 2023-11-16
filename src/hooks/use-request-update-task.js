import { selectInputForNewTaskName, selectTaskId } from '../selectors/appSelectors';
import { useSelector } from 'react-redux';

export const useRequestUpdateTask = () => {
	const inputForNewTaskName = useSelector(selectInputForNewTaskName);
	const taskId = useSelector(selectTaskId);

	const requestUpdateTask = () => {
		fetch(`http://localhost:3005/tasks/${taskId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: inputForNewTaskName,
			}),
		});
	};

	return { requestUpdateTask };
};
