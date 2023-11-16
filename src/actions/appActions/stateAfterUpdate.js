export const STATE_AFTER_UPDATE = (delta1, delta2) => ({
	type: 'STATE_AFTER_UPDATE',
	payload: {
		delta1: delta1,
		delta2: delta2,
	},
});
