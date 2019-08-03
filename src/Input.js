import React from 'react';

const TextInput = ({ name, type, placeholder }) => {
	return (
		<div className="Input">
			<input
				id={name}
				autoComplete="false"
				required
				type={type}
				placeholder={placeholder}
			/>
			<label for={name} />
		</div>
	);
};

export default TextInput;
