import React, { useState, useRef } from 'react';
import { useStore } from './components/useStore';
import styles from './App.module.css';

export const App = () => {
	const [loginError, setLoginError] = useState(null);
	let loginErrorMassage = '';

	const [emailError, setEmailError] = useState(null);
	let emailErrorMassage = '';

	const [passwordError, setPasswordError] = useState(null);
	let passwordErrorMassage = '';

	const { getState, updateState, resetState } = useStore();
	const { email, login, password } = getState();

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
			setEmailError(emailErrorMassage);
		}

		if (target.name === 'login') {
			if (!/^[\w_]*$/.test(target.value)) {
				loginErrorMassage += ' Логин должен содержать только буквы, цифры и нижнее подчеркивание.';
			}
			if (login.length > 20) {
				loginErrorMassage += ' Логин должен быть короче 20 символов.';
			}
			setLoginError(loginErrorMassage);
		}
		if (target.name === 'password') {
			setPasswordError(passwordErrorMassage);
		}
	};

	const onBlur = ({ target }) => {
		if (target.name === 'email') {
			if (target.value.length > 30) {
				emailErrorMassage += ' Почта должна быть короче 30 символов.';
			}
			if (email.indexOf('.') < 0) {
				emailErrorMassage += ' Почта должна содержать точку.';
			}
			if (email.indexOf('@') < 0) {
				emailErrorMassage += ' Почта должна содержать символ @.';
			}
			if (!target.value) {
				emailErrorMassage = ' Поле должно быть заполнено.';
			}
			setEmailError(emailErrorMassage);
		}

		if (target.name === 'login') {
			if (target.value.length < 3) {
				loginErrorMassage = 'Логин должен быть больше 3 символов.';
			}
			if (!target.value) {
				loginErrorMassage = 'Поле должно быть заполнено.';
			}
			setLoginError(loginErrorMassage);
		}

		if (target.name === 'password') {
			if (target.value.length < 5) {
				passwordErrorMassage = 'Пароль должен быть больше 5 символов.';
			}
			if (!target.value) {
				passwordErrorMassage = 'Поле должно быть заполнено.';
			}
			setPasswordError(passwordErrorMassage);
		}
	};
	const focusOnButton = () => {
		if (login && email && password && !loginError && !emailError && !passwordError) {
			submitButtonRef.current.focus();
		}
	};
	setTimeout(focusOnButton, 3000);

	return (
		<div className={styles.regBlock}>
			<h2> CREATE NEW ACCOUNT</h2>
			<form onSubmit={onSubmit}>
				<input name="email" type="email" value={email} onChange={onChange} onBlur={onBlur} placeholder="Email" />
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				<input name="login" type="login" value={login} onChange={onChange} onBlur={onBlur} placeholder="Login" />
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input name="password" type="password" value={password} onChange={onChange} onBlur={onBlur} placeholder="Password" />
				{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<button
					className={styles.confirmButton}
					type="submit"
					disabled={!!emailError || !!loginError || !!passwordError}
					ref={submitButtonRef}
				>
					Создать
				</button>
			</form>
		</div>
	);
};
