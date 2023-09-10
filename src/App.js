import logo from './logo.svg';
import './App.css';

export const App = () => {
	const date = new Date();
	const root = document.querySelector('#root');
	const container = document.createElement('div');
	container.className = 'App';
	root.append(container);
	const header = document.createElement('header');
	header.className = 'App-header';
	container.append(header);

	const img = document.createElement('img');
	img.src = logo;
	img.className = 'App-logo';
	img.alt = 'logo';
	header.append(img);

	const p = document.createElement('p');
	p.textContent = 'Edit src/App.js and save to reload';
	header.append(p);

	const a = document.createElement('a');
	a.className = 'App-link';
	a.href = 'https://reactjs.org';
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
	a.textContent = 'Learn React';
	header.append(a);

	const year = document.createElement('p');
	year.textContent = date.getFullYear();
	header.append(year);
};
