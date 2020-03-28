import { client, q } from '../../config/db';

const signup = (data, setError, history) => {
	const { email, password } = data;
	client
		.query(
			q.Create(q.Collection('users'), {
				credentials: { password },
				data: { email }
			})
		)
		.then(() => history.push('/'))
		.catch((err) => {
			console.log(err);
			setError(err);
		});
};

export default signup;
