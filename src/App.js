import React, { useState, useRef } from 'react';
import { useStore } from './components/useStore';
import styles from './App.module.css';

export const App = () => {
	const [emailError, setEmailError] = useState(null);

	const [passwordError, setPasswordError] = useState(null);

	const [repeatPasswordError, setRepeatPasswordError] = useState(null);

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
		let emailErrorMassage = '';
		let repeatPasswordErrorMassage = '';
		if (target.name === 'email') {
			if (target.value.indexOf(' ') > 0) {
				emailErrorMassage += 'Почта не должна содержать пробелы';
			}
			if (target.value.indexOf('.') < 0) {
				emailErrorMassage += ' Почта должна содержать точку.';
			}
			if (target.value.indexOf('@') < 0) {
				emailErrorMassage += ' Почта должна содержать символ @.';
			}
			if (target.value.indexOf('.ru') < 0 && target.value.indexOf('.com') < 0) {
				emailErrorMassage += ` Некорректная почта. Доступные домены: '.ru' и '.com' `;
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
		let emailErrorMassage = '';
		let passwordErrorMassage = '';
		if (target.name === 'email') {
			if (!target.value) {
				emailErrorMassage = ' Поле должно быть заполнено.';
			} else {
				if (target.value.length > 30) {
					emailErrorMassage += ' Почта должна быть короче 30 символов.';
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
	setTimeout(() => {
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
