import ChartData from '../../interfaces/ChartData';

export default function* mergeSort(
	data: ChartData[],
	asc: boolean = true,
): ChartData[] {
	if (data.length < 2) {
		return data;
	}

	let mid = Math.floor(data.length / 2);
	yield* mergeSort(data.slice(0, mid));
	let left = mergeSort(data.slice(0, mid));
	yield* mergeSort(data.slice(mid));
	let right = mergeSort(data.slice(mid));

	return merge(left, right);

	function merge(sublist1: ChartData[], sublist2: ChartData[]) {
		let resultList = [];

		while (sublist1.length > 0 && sublist2.length > 0)
			resultList.push(
				sublist1[0].value < sublist2[0].value
					? sublist1.shift()
					: sublist2.shift(),
			);

		return resultList.concat(sublist1.length ? sublist1 : sublist2);
	}
}
