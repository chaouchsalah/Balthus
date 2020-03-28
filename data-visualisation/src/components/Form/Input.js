import React from 'react';
import { StyledInput } from './styles';

export default function Input({ value, setValue, name, label, type = 'text' }) {
	return (
		<StyledInput>
			<div className="styled-input">
				<input
					type={type}
					name={name}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					required
				/>
				<label>{label}</label>
				<span></span>
			</div>
		</StyledInput>
	);
}
