export const STATE_BEFORE_UPDATE = (delta1, delta2) => ({
	type: 'STATE_BEFORE_UPDATE',
	payload: {
		delta1: delta1,
		delta2: delta2,
	},
});
