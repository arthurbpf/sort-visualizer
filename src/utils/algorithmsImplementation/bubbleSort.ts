import ChartData from '../../interfaces/ChartData';

export default function* bubbleSort(data: ChartData[], asc: boolean = true) {
	for (let i = 0; i < data.length - 1; i++) {
		for (let j = 0; j < data.length - 1 - i; j++) {
			if (data[j].value > data[j + 1].value) {
				const aux = data[j + 1];
				data[j + 1] = data[j];
				data[j] = aux;
			}

			data[j].state = 'comparing';
			data[j + 1].state = 'comparing';

			yield data;

			data[j].state = 'unordered';
			data[j + 1].state = 'unordered';
		}

		data[data.length - (i + 1)].state = 'ordered';
		yield data;
	}

	data[0].state = 'ordered';
	return data;
}
