import React, { useEffect, useMemo, useState } from 'react';
import { BarDatum, ResponsiveBar } from '@nivo/bar';

interface chartData extends BarDatum {
	id: number;
	value: number;
}

export default function Home() {
	const [data, setData] = useState<chartData[]>([]);

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

	const onClickChangeData = () => {
		let newData = [...data];

		setData(newData.sort((a, b) => (a.value < b.value ? 1 : -1)));
	};

	return (
		<div style={{ height: 500 }}>
			<ResponsiveBar data={data}></ResponsiveBar>
			<button onClick={onClickChangeData}>CLICK</button>
		</div>
	);
}
