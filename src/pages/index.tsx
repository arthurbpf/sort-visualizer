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
				state: 'unordered',
			} as ChartData);
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

			setIsRunning(!done);
		},
		isRunning ? 100 : null
	);

	const onClickChangeData = () => {
		const generator = bubbleSort(data);

		setOrderingGenerator(generator);
		setIsRunning(true);
	};

	const getColor = (bar: any) => {
		const colors = {
			comparing: '#ff0',
			ordered: '#f00',
			unordered: '#000',
		};

		const { state } = bar.data as ChartData;

		return colors[state];
	};

	return (
		<div style={{ height: 500 }}>
			<ResponsiveBar
				data={data}
				colors={getColor}
				animate={true}
				motionConfig={{
					mass: 1,
					friction: 1,
					tension: 200,
					clamp: true,
				}}
			></ResponsiveBar>
			<button onClick={onClickChangeData}>CLICK</button>
		</div>
	);
}
