import React from 'react';
import { Check } from './styles';

export default function Switch({ label, name, checked, onChange }) {
	return (
		<Check>
			<input
				id={name}
				type="checkbox"
				class="switch"
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			<label for={name}>{label}</label>
		</Check>
	);
}
