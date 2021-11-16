import ChartData from '../../interfaces/ChartData';

export default function* selectionSort(data: ChartData[], asc: boolean = true) {
	for (let i = 0; i < data.length; i++) {
		let smallerNumberIndex = i;

		for (let j = i; j < data.length; j++) {
			data[smallerNumberIndex].state = 'comparing';
			data[j].state = 'comparing';

			yield data;

			data[smallerNumberIndex].state = 'unordered';
			data[j].state = 'unordered';

			if (data[j].value < data[smallerNumberIndex].value) {
				smallerNumberIndex = j;
			}
		}

		if (i !== smallerNumberIndex) {
			const aux = data[i];
			data[i] = data[smallerNumberIndex];
			data.splice(smallerNumberIndex, 1);
			data.splice(i + 1, 0, aux);
		}

		data[i].state = 'ordered';

		yield data;
	}

	return data;
}
