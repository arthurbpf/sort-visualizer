import { BarDatum } from '@nivo/bar';

export default interface ChartData extends BarDatum {
	id: number;
	value: number;
	state: 'ordered' | 'comparing' | 'unordered';
}
