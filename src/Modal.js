import React from 'react';
import TextInput from './Input';

const Modal = ({ onSubmit }) => {
	return (
		<div className="Modal">
			<form onSubmit={onSubmit} className="ModalForm">
				<TextInput id="name" type="text" placeholder="John" />
				<TextInput id="username" type="email" placeholder="example@gmail.com" />
				<TextInput id="password" type="password" placeholder="password" />
				<button>
					Login in
					<i className="fa fa-fw fa-chevron-right" />
				</button>
			</form>
		</div>
	);
};

export default Modal;
