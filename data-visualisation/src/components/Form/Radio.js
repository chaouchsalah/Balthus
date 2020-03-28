import React from 'react';
import { Check } from './styles';

export default function Radio({ label, name, checked, onChange }) {
	return (
		<Check>
			<input
				id={name}
				type="radio"
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label for={name}>{label}</label>
		</Check>
	);
}
