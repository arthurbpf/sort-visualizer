import { css } from '@linaria/core';

export const colors = {
	BACKGROUND_COLOR: '#EEF0EA',
	TEXT_COLOR: '#090B0B',
	TEXT_COLOR_LIGHT: '#FFFFFF',
	PRIMARY_COLOR: '#704F8E',
	PRIMARY_COLOR_DARK: '#3A2949',
	PRIMARY_COLOR_LIGHT: '#CB90FF',
	SECONDARY_COLOR_DARK: '#202727',
	SECONDARY_COLOR_LIGHT: '#808A9C',
};

export default css`
	:global() {
		:root {
			--background-color: ${colors.BACKGROUND_COLOR};
			--text-color: ${colors.TEXT_COLOR};
			--text-color-light: ${colors.TEXT_COLOR_LIGHT};
			--primary-color: ${colors.PRIMARY_COLOR};
			--secondary-color-dark: ${colors.SECONDARY_COLOR_DARK};
			--secondary-color-light: ${colors.SECONDARY_COLOR_LIGHT};
		}

		html,
		body {
			padding: 0;
			margin: 0;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
				Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
				sans-serif;
			background-color: var(--background-color);
			color: var(--text-color);
		}

		* {
			box-sizing: border-box;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		/* Removes default input style */
		input[type='range'] {
			-webkit-appearance: none; /* Hides the slider so that custom slider can be made */
			width: 100%; /* Specific width is required for Firefox. */
			background: transparent; /* Otherwise white in Chrome */
		}

		input[type='range']::-webkit-slider-thumb {
			-webkit-appearance: none;
		}

		input[type='range']:focus {
			outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
		}
	}
`;
