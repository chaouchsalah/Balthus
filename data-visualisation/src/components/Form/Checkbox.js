import React from 'react';
import { Check } from './styles';

export default function Checkbox({ label, name, checked, onChange }) {
	return (
		<Check>
			<input
				id={name}
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label htmlFor={name}>{label}</label>
		</Check>
	);
}
