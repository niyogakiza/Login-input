import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import ReactDOM from 'react-dom';

import './styles.scss';

const Login = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [mounted]);

	const handleSubmit = event => {
		event.preventDefault();
		setMounted(false);
	};

	return (
		<div className="App">
			<Modal onSubmit={handleSubmit} />;
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Login />, rootElement);
