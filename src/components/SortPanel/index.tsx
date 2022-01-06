import { useEffect, useState } from 'react';
import { GiSnail } from 'react-icons/gi';
import { BsFillLightningFill, BsDice5 } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import useInterval from '../../hooks/useInterval';
import ChartData from '../../interfaces/ChartData';
import randomNumberInRange from '../../utils/randomNumberInRange';
import SortingBarChart from '../SortingBarChart';
import algorithmsArray from '../../utils/algorithmsArray';
import {
	BarChartContainer,
	MainDiv,
	SettingsDiv,
	AlgosDiv,
	SpeedSelectionDiv,
	ButtonsDiv,
} from './styles';

const SortPanel: React.FC = () => {
	const [data, setData] = useState<ChartData[]>([]);
	const [sortedData, setSortedData] = useState<ChartData[]>([]);
	const [sortSpeed, setSortSpeed] = useState(50);
	const [isRunning, setIsRunning] = useState(false);
	const [orderingGenerator, setOrderingGenerator] = useState<Generator>();
	const [selectedAlgorithm, setSelectedAlgorithm] = useState(
		algorithmsArray[0],
	);

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
		setSortedData(newData);
		setIsRunning(false);
	};

	useEffect(() => {
		generateRandomData();
	}, []);

	useEffect(() => {
		setOrderingGenerator(selectedAlgorithm.implementation(data));
	}, [data, selectedAlgorithm]);

	const onChangeAlgorithm = (algorithmId: string) => {
		let index =
			algorithmsArray.findIndex((item) => item.id === algorithmId) || 0;

		setSelectedAlgorithm(algorithmsArray[index]);
	};

	const onClickSort = () => {
		setIsRunning(true);
	};

	useInterval(
		() => {
			if (!orderingGenerator) {
				setIsRunning(false);
				return;
			}

			const { value, done } = orderingGenerator.next();
			setSortedData([...value]);

			setIsRunning(!done);
		},
		isRunning ? sortSpeed : null,
	);

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
		<MainDiv>
			<h1>Sort Visualizer</h1>

			<BarChartContainer>
				<SortingBarChart
					data={sortedData}
					colors={getColor}
				></SortingBarChart>
			</BarChartContainer>

			<SettingsDiv>
				{algorithmsArray.map((algo) => {
					return (
						<AlgosDiv key={algo.id}>
							<input
								type="radio"
								name="sortingAlgorithm"
								id={algo.id}
								value={algo.id}
								checked={selectedAlgorithm.id === algo.id}
								onChange={(e) =>
									onChangeAlgorithm(e.target.value)
								}
							/>
							<label htmlFor={algo.id}>{algo.name}</label>
						</AlgosDiv>
					);
				})}

				<SpeedSelectionDiv>
					<GiSnail />
					<input
						type="range"
						min={0}
						max={1000}
						onChange={(e) =>
							setSortSpeed(
								Math.abs(Number(e.target.value) - 1000),
							)
						}
					></input>
					<BsFillLightningFill />
				</SpeedSelectionDiv>

				<ButtonsDiv>
				<button onClick={onClickSort} disabled={isRunning}>
					<MdSort /> SORT IT OUT!
				</button>
				<button onClick={generateRandomData}>
					<BsDice5 />
					ROLL THE DICE!
				</button>
				</ButtonsDiv>
			</SettingsDiv>
		</MainDiv>
	);
};

export default SortPanel;
