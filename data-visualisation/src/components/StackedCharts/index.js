import React from 'react';
import { Bar } from 'react-chartjs-2';
import { primary, darkGray } from '../../utils/colors';

export default function StackedCharts({ labels, pageViews, uniquePageViews }) {
	const dataset = {
		labels: labels,
		datasets: [
			{
				label: 'Unique page views',
				data: pageViews,
				backgroundColor: primary
			},
			{
				label: 'Total page views',
				data: uniquePageViews,
				backgroundColor: darkGray
			}
		]
	};
	return (
		<div style={{ height: '400px', width: '66.666%' }}>
			<Bar
				data={dataset}
				options={{
					maintainAspectRatio: false,
					scales: {
						xAxes: [{ stacked: true }],
						yAxes: [{ stacked: true }]
					}
				}}></Bar>
		</div>
	);
}
