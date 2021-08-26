import { ResponsiveBar } from '@nivo/bar';
import React, { ButtonHTMLAttributes } from 'react';
import ChartData from '../../interfaces/ChartData';

type BarChartProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	data: ChartData[];
	colors?: string | { (bar: any): string };
};

const SortingBarChart: React.FC<BarChartProps> = ({ data, colors }) => {
	return (
		<ResponsiveBar
			data={data}
			colors={colors}
			isInteractive={false}
			animate={true}
			motionConfig={{
				mass: 1,
				friction: 1,
				tension: 200,
				clamp: true,
			}}
		/>
	);
};

export default SortingBarChart;
