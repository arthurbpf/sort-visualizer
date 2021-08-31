import bubbleSort from './algorithmsImplementation/bubbleSort';

interface ISortingAlgorithm {
	id: string;
	name: string;
	implementation: Function;
}

const array: ISortingAlgorithm[] = [
	{
		id: 'bubbleSort',
		name: 'Bubble sort',
		implementation: bubbleSort,
	},
];

export default array;
