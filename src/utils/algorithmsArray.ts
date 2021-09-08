import bubbleSort from './algorithmsImplementation/bubbleSort';
import selectionSort from './algorithmsImplementation/selectionSort';

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
	{
		id: 'selectionSort',
		name: 'Selection sort',
		implementation: selectionSort,
	},
];

export default array;
