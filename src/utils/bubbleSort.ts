import ChartData from '../interfaces/ChartData';

export default function* bubbleSort(data: ChartData[], asc: boolean = true) {
	for (let i = 0; i < data.length - 1; i++) {
		for (let j = 0; j < data.length - 1 - i; j++) {
			if (data[j].value > data[j + 1].value) {
				const aux = data[j + 1];
				data[j + 1] = data[j];
				data[j] = aux;
			}

			yield data;
		}
	}

	return data;
}
