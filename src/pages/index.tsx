import React, { useEffect, useMemo, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import ChartData from '../interfaces/ChartData';
import bubbleSort from '../utils/bubbleSort';
import useInterval from '../hooks/useInterval';

export default function Home() {
	const [data, setData] = useState<ChartData[]>([]);
	const [isRunning, setIsRunning] = useState(false);
	const [orderingGenerator, setOrderingGenerator] = useState<Generator>();

	const generateRandomData = () => {
		let newData = [];

		for (let i = 0; i < 15; i++) {
			newData.push({
				id: i,
				value: Math.floor(Math.random() * 100),
			});
		}

		setData(newData);
	};

	useEffect(() => {
		generateRandomData();
	}, []);

	useInterval(
		() => {
			if (!orderingGenerator) {
				setIsRunning(false);
				return;
			}

			const { value, done } = orderingGenerator.next();
			setData([...value]);

			console.log(done);

			setIsRunning(!done);
		},
		isRunning ? 10 : null
	);

	const onClickChangeData = () => {
		let newData = [...data];

		const generator = bubbleSort(newData);

		setOrderingGenerator(generator);
		setIsRunning(true);
	};

	return (
		<div style={{ height: 500 }}>
			<ResponsiveBar data={data}></ResponsiveBar>
			<button onClick={onClickChangeData}>CLICK</button>
		</div>
	);
}
