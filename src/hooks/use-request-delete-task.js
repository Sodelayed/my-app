import { SET_REFRESH } from '../actions/appActions';
import { useDispatch } from 'react-redux';

export const useRequestDeleteTask = () => {
	const dispatch = useDispatch();

	const requestDelete = (id) => {
		fetch(`http://localhost:3005/tasks/${id}`, {
			method: 'DELETE',
		}).then(() => dispatch(SET_REFRESH));
	};
	return requestDelete;
};
