import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './App.module.css';

const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.required('Пожалуйста, заполните это поле')
		.matches(/(.ru|.com)/, 'Неверный домен. Доступные: .ru и .com')
		.max(20, 'Почта должна быть не длиннее 20 символов'),
	password: yup.string().required('Пожалуйста, заполните это поле').min(5, 'Пароль должен быть не короче 5 символов'),
	repeatPassword: yup
		.string()
		.required('Пожалуйста, заполните это поле')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const AppWithYup = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		resolver: yupResolver(fieldsSchema),
	});

	let emailError = errors.email?.message;
	let passwordError = errors.password?.message;
	let repeatPasswordError = errors.repeatPassword?.message;

	const sendFormData = (formData) => {
		console.log(formData);
		reset();
	};

	return (
		<div className={styles.regBlock}>
			<h2> CREATE NEW ACCOUNT</h2>
			<h4>Yup & React Hook Form</h4>
			<form onSubmit={handleSubmit(sendFormData)}>
				<input name="email" type="email" placeholder="Email" {...register('email')} />
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				<input name="password" type="password" placeholder="Password" {...register('password')} />
				{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<input name="repeatPassword" type="password" placeholder="Repeat your password" {...register('repeatPassword')} />
				{repeatPasswordError && <div className={styles.errorLabel}>{repeatPasswordError}</div>}
				<button className={styles.confirmButton} type="submit" disabled={!!emailError && !!passwordError && !!repeatPasswordError}>
					Создать
				</button>
			</form>
		</div>
	);
};
