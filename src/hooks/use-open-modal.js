import { useDispatch, useSelector } from 'react-redux';
import { STATE_BEFORE_UPDATE } from '../actions/appActions';
import { selectTasks } from '../selectors/tasksSelectors';

export const useOpenModal = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);

	const openModal = (target) => {
		const targetTask = tasks.filter(({ id }) => target.id === `${id}`);
		dispatch(STATE_BEFORE_UPDATE(targetTask[0].task, target.id));
	};

	return { openModal };
};
