import React, { useState } from 'react';
import { StyledForm } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import Error from '../../components/UI/Error';
import signup from '../../api/users/singup';

export default function Signup({ history }) {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<StyledForm>
			<h2>Signup</h2>
			<Input label="Email" name="email" value={email} setValue={setEmail} />
			<Input
				label="Password"
				name="password"
				type="password"
				value={password}
				setValue={setPassword}
			/>
			{error && <Error>'An error has occured'</Error>}
			<Button onClick={() => signup({ email, password }, setError, history)}>
				Signup
			</Button>
		</StyledForm>
	);
}
