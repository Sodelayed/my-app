import React, { useState, useRef } from 'react';
import { useStore } from './components/useStore';
import styles from './App.module.css';

export const App = () => {
	const [emailError, setEmailError] = useState(null);
	let emailErrorMassage = '';

	const [passwordError, setPasswordError] = useState(null);
	let passwordErrorMassage = '';

	const [repeatPasswordError, setRepeatPasswordError] = useState(null);
	let repeatPasswordErrorMassage = '';

	const { getState, updateState, resetState } = useStore();
	const { email, password, repeatPassword } = getState();

	const submitButtonRef = useRef(null);

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};
	const sendFormData = (form) => {
		console.log(form);
		resetState();
	};

	const onChange = ({ target }) => {
		updateState(target.name, target.value);
		if (target.name === 'email') {
			if (target.value.indexOf(' ') > 0) {
				emailErrorMassage += 'Почта не должна содержать пробелы';
			}
		}
		if (target.name === 'repeatPassword') {
			if (target.value !== password) {
				repeatPasswordErrorMassage = 'Пароль не совпадает';
			}
		}

		setEmailError(emailErrorMassage);
		setRepeatPasswordError(repeatPasswordErrorMassage);
	};

	const onBlur = ({ target }) => {
		if (target.name === 'email') {
			if (!target.value) {
				emailErrorMassage = ' Поле должно быть заполнено.';
			} else {
				if (target.value.length > 30) {
					emailErrorMassage += ' Почта должна быть короче 30 символов.';
				}
				if (email.indexOf('.') < 0) {
					emailErrorMassage += ' Почта должна содержать точку.';
				}
				if (email.indexOf('@') < 0) {
					emailErrorMassage += ' Почта должна содержать символ @.';
				}

				if (target.value.indexOf('.ru') < 0 && target.value.indexOf('.com') < 0) {
					emailErrorMassage += ` Некорректная почта. Доступные домены: '.ru' и '.com' `;
				}
			}
			setEmailError(emailErrorMassage);
		}
		if (target.name === 'password') {
			if (!target.value) {
				passwordErrorMassage = 'Поле должно быть заполнено.';
			} else {
				if (target.value.length < 5) {
					passwordErrorMassage = 'Пароль должен быть больше 5 символов.';
				}
			}
			setPasswordError(passwordErrorMassage);
		}
	};
	setInterval(() => {
		if (!emailError && !passwordError && email && password && repeatPassword) {
			submitButtonRef.current.focus();
		}
	}, 1000);

	return (
		<div className={styles.regBlock}>
			<h2> CREATE NEW ACCOUNT</h2>
			<form onSubmit={onSubmit}>
				<input name="email" type="email" value={email} onChange={onChange} onBlur={onBlur} placeholder="Email" />
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				<input name="password" type="password" value={password} onChange={onChange} onBlur={onBlur} placeholder="Password" />
				{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<input
					name="repeatPassword"
					type="password"
					value={repeatPassword}
					onChange={onChange}
					onBlur={onBlur}
					placeholder="Repeat your password"
				/>
				{repeatPasswordError && <div className={styles.errorLabel}>{repeatPasswordError}</div>}
				<button
					className={styles.confirmButton}
					type="submit"
					disabled={!!emailError || !!repeatPasswordError || !!passwordError || !email || !password || !repeatPassword}
					ref={submitButtonRef}
				>
					Создать
				</button>
			</form>
		</div>
	);
};
