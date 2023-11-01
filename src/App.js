import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { SelectedTask } from './SelectedTask/SelectedTask';
import { NotFound } from './404Error/NotFound';

export function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/tasks/:id" element={<SelectedTask />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Routes>
		</>
	);
}
