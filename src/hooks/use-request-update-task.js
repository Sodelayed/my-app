export const useRequestUpdateTask = ({
	id,
	taskName,
	discription,
	rightToChange,
	setRightToChange,
}) => {
	const requestUpdateTask = () => {
		setRightToChange(!rightToChange);
		fetch(`http://localhost:3005/tasks/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: taskName,
				discription: discription,
			}),
		});
	};
	return { requestUpdateTask };
};
