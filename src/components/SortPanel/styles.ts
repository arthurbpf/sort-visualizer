import { styled } from '@linaria/react';

export const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

export const BarChartContainer = styled.div`
	height: 50vh;
	width: 100%;
`;

export const SettingsDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 2rem;

	* {
		margin: 0.2rem 0;
	}

	button {
		display: flex;
		align-items: center;
		align-content: center;
	}
`;

export const AlgosDiv = styled.div`
	margin: 0;
`;

export const SpeedSelectionDiv = styled.div`
	display: flex;
`;

export const ButtonsDiv = styled.div`
	display: flex;
	justify-content: center;

	* {
		height: 50px;
		margin: 0 1rem;
	}
`;
