import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectChecked,
	selectRefresh,
	selectSearchButton,
	selectSearchInputValue,
} from '../selectors/appSelectors';
import { getTask } from '../actions/tasksActions';

export const useRequestGetTask = () => {
	const refresh = useSelector(selectRefresh);
	const checked = useSelector(selectChecked);
	const searchButton = useSelector(selectSearchButton);
	const searchInputValue = useSelector(selectSearchInputValue);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTask(checked, searchButton, searchInputValue));
	}, [refresh, checked, searchButton, searchInputValue]);
};
