export default function formatData(domains, stacked, boxes= []) {
	if (domains.length === 0) {
		return { labels: [], data: [] };
	}
	domains = domains.map((domain) => {
		const httpPos = domain.index.indexOf('/');
		const splitted = domain.index.substring(httpPos + 2).split('.');
		return { ...domain, index: splitted[splitted.length - 2] };
	});
	domains = domains.filter((domain) => !boxes.includes(domain.index));

	const pageViews = domains.map((domain) => domain.Pageviews);
	let uniquePageViews;
	if (stacked) {
		uniquePageViews = domains.map(
			(domain) => domain.Pageviews - domain['Unique Pageviews']
		);
	} else {
		uniquePageViews = domains.map((domain) => domain['Unique Pageviews']);
	}
	const labels = domains.map((domain) => domain.index);

	return { labels, pageViews, uniquePageViews };
}
