import React, { useState, useRef, useEffect } from 'react';
import { useStore } from './components/useStore';
import styles from './App.module.css';

export const App = () => {
	const [emailError, setEmailError] = useState(null);

	const [passwordError, setPasswordError] = useState(null);

	const [repeatPasswordError, setRepeatPasswordError] = useState(null);

	const { getState, updateState, resetState } = useStore();
	const { email, password, repeatPassword } = getState();

	const submitButtonRef = useRef(null);
	const passwordRef = useRef(null);
	const repeatPasswordRef = useRef(null);

	let emailErrorMessage = '';
	let repeatPasswordErrorMessage = '';
	let passwordErrorMessage = '';
	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};
	const sendFormData = (form) => {
		console.log(form);
		resetState();
	};
	const emailCheck = (emailText) => {
		if (emailText.indexOf('.ru') < 0 && emailText.indexOf('.com') < 0) {
			emailErrorMessage += ` Некорректная почта. Доступные домены: '.ru' и '.com' `;
		}
		if (emailText.indexOf(' ') > 0) {
			emailErrorMessage += 'Почта не должна содержать пробелы';
		}
		if (emailText.indexOf('.') < 0) {
			emailErrorMessage += ' Почта должна содержать точку.';
		}
		if (emailText.indexOf('@') < 0) {
			emailErrorMessage += ' Почта должна содержать символ @.';
		}
	};

	const onChange = ({ target }) => {
		updateState(target.name, target.value);

		if (target.name === 'email') {
			emailCheck(target.value);
			setEmailError(emailErrorMessage);
		}
		if (target.name === 'repeatPassword') {
			if (passwordRef.current.value !== repeatPasswordRef.current.value) {
				repeatPasswordErrorMessage = 'Пароль не совпадает';
			} else {
				repeatPasswordErrorMessage = '';
			}
			setRepeatPasswordError(repeatPasswordErrorMessage);
		}
	};

	const onBlur = ({ target }) => {
		if (target.name === 'email') {
			if (!target.value) {
				emailErrorMessage = ' Поле должно быть заполнено.';
			} else {
				emailCheck(target.value);
				if (target.value.length > 30) {
					emailErrorMessage += ' Почта должна быть короче 30 символов.';
				}
			}
			setEmailError(emailErrorMessage);
		}
		if (target.name === 'password') {
			if (!target.value) {
				passwordErrorMessage = 'Поле должно быть заполнено.';
			} else {
				if (target.value.length <= 5) {
					passwordErrorMessage = 'Пароль должен быть больше 5 символов.';
				}
			}
			setPasswordError(passwordErrorMessage);
		}
	};

	useEffect(() => {
		if (password === repeatPassword) {
			if (email && password && repeatPassword && !emailError && !passwordError && !repeatPasswordError) {
				submitButtonRef.current.focus();
			}
		}
	}, [email, password, repeatPassword, emailError, passwordError, repeatPasswordError]);

	return (
		<div className={styles.regBlock}>
			<h2> CREATE NEW ACCOUNT</h2>
			<h4> Create React App</h4>
			<form onSubmit={onSubmit}>
				<input name="email" type="email" value={email} onChange={onChange} onBlur={onBlur} placeholder="Email" />
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				<input
					ref={passwordRef}
					name="password"
					type="password"
					value={password}
					onChange={onChange}
					onBlur={onBlur}
					placeholder="Password"
				/>
				{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<input
					ref={repeatPasswordRef}
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
