import ChartData from '../../interfaces/ChartData';

export default function* selectionSort(data: ChartData[], asc: boolean = true) {
	for (let i = 0; i < data.length; i++) {
		let smallerNumberIndex = i;

		for (let j = i; j < data.length; j++) {
			data[smallerNumberIndex].state = 'comparing';
			data[j].state = 'comparing';

			yield data;

			if (data[j] < data[smallerNumberIndex]) {
				smallerNumberIndex = j;
			}

			data[smallerNumberIndex].state = 'unordered';
			data[j].state = 'unordered';
		}

		data[i].state = 'ordered';

		yield data;
	}

	return data;
}
