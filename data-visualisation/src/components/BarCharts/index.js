import React from 'react';
import { Bar } from 'react-chartjs-2';
import { primary } from '../../utils/colors';

function BarChart({ labels, data, label }) {
	const dataset = {
		labels: labels,
		datasets: [
			{
				label,
				data,
				backgroundColor: primary
			}
		]
	};
	return (
		<div style={{ height: '400px', width: '66.666%' }}>
			<Bar data={dataset} options={{ maintainAspectRatio: false }}></Bar>
		</div>
	);
}

export default BarChart;
