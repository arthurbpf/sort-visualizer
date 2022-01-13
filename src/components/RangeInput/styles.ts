import { styled } from '@linaria/react';
import {colors} from '../../styles/globals'

const defaultTrackStyle = `
	width: 100%;
	height: 10px;
	cursor: pointer;
	background: ${colors.PRIMARY_COLOR};
	border-radius: 5px;
`;

const defaultThumbStyle = `
	-webkit-appearance: none;
	height: 20px;
	width: 20px;
	margin-top: -5px;
	border-radius: 50%;
	background: ${colors.PRIMARY_COLOR};
	cursor: pointer;
`;

export const StyledRangeInput = styled.input`
	::-webkit-slider-runnable-track {
		${defaultTrackStyle}
	}

	::-moz-range-track {
		${defaultTrackStyle}
	}

	::-webkit-slider-thumb {
		${defaultThumbStyle}
	}

	::-moz-range-thumb {
		${defaultThumbStyle}
	}
`;
