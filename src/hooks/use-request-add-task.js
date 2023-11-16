import { useSelector } from 'react-redux';
import { selectInputForNewTask } from '../selectors/appSelectors';

export const useRequestAddTask = () => {
	const inputForNewTask = useSelector(selectInputForNewTask);
	const requestAddTask = () => {
		fetch('http://localhost:3005/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: inputForNewTask,
			}),
		});
	};

	return { requestAddTask };
};
