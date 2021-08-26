import { useEffect, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import ChartData from '../../interfaces/ChartData';
import bubbleSort from '../../utils/bubbleSort';
import randomNumberInRange from '../../utils/randomNumberInRange';
import SortingBarChart from '../SortingBarChart';

const SortPanel: React.FC = () => {
	const [data, setData] = useState<ChartData[]>([]);
	const [sortSpeed, setSortSpeed] = useState(50);
	const [isRunning, setIsRunning] = useState(false);
	const [orderingGenerator, setOrderingGenerator] = useState<Generator>();

	const minValue = 500;
	const maxValue = 1000;

	const generateRandomData = () => {
		let newData = [];

		for (let i = 0; i < 15; i++) {
			newData.push({
				id: i,
				value: Math.floor(randomNumberInRange(minValue, maxValue)),
				state: 'unordered',
			} as ChartData);
		}

		setData(newData);
		setIsRunning(false);
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
		isRunning ? sortSpeed : null
	);

	const onClickSort = () => {
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
			<h1>Sort Visualizer</h1>

			<SortingBarChart data={data} colors={getColor}></SortingBarChart>

			<input
				type="range"
				min={0}
				max={1000}
				onChange={(e) =>
					setSortSpeed(Math.abs(Number(e.target.value) - 1000))
				}
			></input>

			<button onClick={onClickSort} disabled={isRunning}>
				SORT IT OUT!
			</button>
			<button onClick={generateRandomData}>ROLL THE DICE!</button>
		</div>
	);
};

export default SortPanel;
