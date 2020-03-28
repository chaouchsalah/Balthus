import { client, q } from '../../config/db';

const getAllDomains = client
	.query(q.Paginate(q.Match(q.Ref('indexes/all_domains'))))
	.then((response) => {
		const notesRefs = response.data;
		const getAllProductDataQuery = notesRefs.map((ref) => {
			return q.Get(ref);
		});
		return client
			.query(getAllProductDataQuery)
			.then((data) => data.map((value) => value.data));
	})
	.catch((error) => console.warn('error', error));

export default getAllDomains;
