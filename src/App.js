import styles from './App.module.css';
import { useState } from 'react';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let operation = ['-', '+', '='];
let a = 0;
let b = 0;
let sign;

export const App = () => {
	let [value, setValue] = useState(0);
	const onClick = (number) => {
		setValue(value === 0 || value === undefined || value === operation[0] || value === operation[1] ? (value = number) : (value += `${number}`));
		setAnswer(answer === true ? !answer : answer);
	};

	let [answer, setAnswer] = useState(false);

	const plus = () => {
		a = Number(value);
		sign = operation[1];
		setValue((value = sign));
		setAnswer(answer === true ? !answer : answer);
	};

	const minus = () => {
		a = Number(value);
		sign = operation[0];
		setValue((value = sign));
		setAnswer(answer === true ? !answer : answer);
	};

	const equal = () => {
		b = Number(value);
		setValue(sign === operation[1] ? (value = a + b) : (value = a - b));
		setAnswer(!answer);
	};
	const reload = () => {
		setValue((value = arr[9]));
		setAnswer((answer = false));
	};

	return (
		<div className={styles.app}>
			<div className={styles.output}>
				<p className={answer ? styles.textGreen : styles.textWhite}>{value}</p>
			</div>
			<div className={styles.keyboard}>
				<button className={styles.func} onClick={plus}>
					{operation[1]}
				</button>
				<button className={styles.func} onClick={minus}>
					{operation[0]}
				</button>
				<button className={styles.func} onClick={equal}>
					{operation[2]}
				</button>

				<button className={styles.button} onClick={() => onClick(arr[6])}>
					{arr[6]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[7])}>
					{arr[7]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[8])}>
					{arr[8]}
				</button>

				<button className={styles.button} onClick={() => onClick(arr[3])}>
					{arr[3]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[4])}>
					{arr[4]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[5])}>
					{arr[5]}
				</button>

				<button className={styles.button} onClick={() => onClick(arr[0])}>
					{arr[0]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[1])}>
					{arr[1]}
				</button>
				<button className={styles.button} onClick={() => onClick(arr[2])}>
					{arr[2]}
				</button>

				<button className={styles.null} onClick={() => onClick(arr[9])}>
					{arr[9]}
				</button>
				<button className={styles.del} onClick={reload}>
					C
				</button>
			</div>
		</div>
	);
};
