import { client, q } from '../../config/db';

export default function login(data, setError, history) {
	const { email, password } = data;

	client
		.query(q.Login(q.Match(q.Index('users_by_email'), email), { password }))
		.then((ret) => {
      localStorage.setItem('token', ret.secret);
      history.push('/');
		})
		.catch((err) => {
			console.log(err);
			setError(err);
		});
}
