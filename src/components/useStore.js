import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	repeatPassword: '',
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (name, newValue) =>
			setState({
				...state,
				[name]: newValue,
			}),
		resetState() {
			setState(initialState);
		},
	};
};
