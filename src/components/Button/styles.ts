import { styled } from '@linaria/react';

export const StyledButton = styled.button`
	background-color: var(--primary-color);
	color: var(--text-color-light);
	border-radius: 8px;
	border-style: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.8em;
	font-size: 14px;
	font-weight: 500;
	outline: none;
	text-align: center;
	text-decoration: none;
	transition: filter 0.1s;

	:hover {
		filter: brightness(75%);
	}

	*:not(:first-child) {
		margin-left: 0.8em;
	}
`;
