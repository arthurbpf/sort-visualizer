import React, { InputHTMLAttributes } from 'react';
import { StyledRangeInput } from './styles';

type RangeInputProps = InputHTMLAttributes<HTMLInputElement>;

const RangeInput: React.FC<RangeInputProps> = ({ ...rest }) => {
	return <StyledRangeInput type="range" {...rest} />;
};

export default RangeInput;
