import React, { useEffect, useState } from 'react';
import { CheckWrapper, StyledStastics } from './styles';
import BarChart from '../../components/BarCharts';
import StackedCharts from '../../components/StackedCharts';
import Checkbox from '../../components/Form/Checkbox';
import Switch from '../../components/Form/Switch';
import Radio from '../../components/Form/Radio';
import Button from '../../components/Button';

import formatData from '../../utils/formatData';
import { totalPageViews, uniquePageViewsLabel } from '../../utils/constants';

import triggerLambda from '../../api/lambda';
import getAllDomains from '../../api/domains/fetchAllDomains';

function Statistics() {
	const [domains, setDomains] = useState([]);
	const [boxes, setBoxes] = useState([]);
	const [initBoxes, setInitBoxes] = useState([]);
	const [stacked, setStacked] = useState(false);
	const [barLabel, setBarLabel] = useState(totalPageViews);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		getAllDomains.then((res) => setDomains(res));
	}, []);

	if (refresh) {
		getAllDomains.then((res) => setDomains(res));
		setRefresh(false);
	}

	if (domains.length !== 0 && initBoxes.length === 0) {
		setInitBoxes(formatData(domains).labels);
	}

	const { labels, pageViews, uniquePageViews } = formatData(
		domains,
		stacked,
		boxes
	);

	return (
		<StyledStastics>
			<CheckWrapper>
				<h4>Domains:</h4>
				{initBoxes.map((label) => (
					<Checkbox
						label={label}
						name={label}
						checked={boxes.indexOf(label) === -1}
						onChange={() => updateCheckboxes(label, [boxes, setBoxes])}
					/>
				))}
			</CheckWrapper>
			<CheckWrapper>
				<h4>Graph type:</h4>
				<Switch
					label="Stacked"
					name="stacked"
					checked={stacked}
					onChange={() => setStacked(!stacked)}
				/>
			</CheckWrapper>
			{!stacked && (
				<CheckWrapper>
					<h4>Graph content:</h4>
					<Radio
						label={totalPageViews}
						name="pageViews"
						checked={barLabel === totalPageViews}
						onChange={() => setBarLabel(totalPageViews)}
					/>
					<Radio
						label={uniquePageViewsLabel}
						name="pageViews"
						checked={barLabel === uniquePageViewsLabel}
						onChange={() => setBarLabel(uniquePageViewsLabel)}
					/>
				</CheckWrapper>
			)}
			<div>
				{domains.length !== 0 && !stacked && (
					<BarChart
						labels={labels}
						data={barLabel === totalPageViews ? pageViews : uniquePageViews}
						label={barLabel}
					/>
				)}
				{stacked && (
					<StackedCharts
						labels={labels}
						pageViews={pageViews}
						uniquePageViews={uniquePageViews}
					/>
				)}
			</div>
			<Button onClick={() => triggerLambda(setRefresh)}>Refresh data</Button>
		</StyledStastics>
	);
}

function updateCheckboxes(label, boxesState) {
	const [boxes, setBoxes] = boxesState;
	const index = boxes.indexOf(label);
	if (index === -1) {
		setBoxes([...boxes, label]);
	} else {
		setBoxes([...boxes.slice(0, index), ...boxes.slice(index + 1)]);
	}
}

export default Statistics;
