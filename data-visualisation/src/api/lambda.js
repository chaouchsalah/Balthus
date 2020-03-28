import axios from 'axios';

export default function triggerLambda(setRefresh) {
	return axios
		.get(
			'https://6puoe205j4.execute-api.eu-west-1.amazonaws.com/default/lambda-data-processing',
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_LAMBDA_AUTH0}`
				}
			}
		)
		.then(() => setRefresh(true))
		.catch((err) => console.log(err));
}
