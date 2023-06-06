import React from 'react';

import styled from 'styled-components';

import negativeMark from '../assets/negativeMark.png';
import positiveMark from '../assets/positiveMark.png';
import arrowMark from '../assets/arrow.png';

import { NextQuestionType } from '../types/mainType';

type Props = {
	state: string;
	onClickHandler: (state: string) => void;
};

type StyleProps = {
	bgcColor: string;
};

const NextQuestionButton = ({ state, onClickHandler }: Props) => {
	let description = 'Check Answer';
	let icon = negativeMark;
	let backgroundColor = '#2D480B';

	if (state === 'check-answer-clicked') {
		icon = positiveMark;
		backgroundColor = '#66B700';
	} else if (state === 'go-to-next-question') {
		description = 'Next Question';
		icon = arrowMark;
		backgroundColor = '#092264';
	}
	return (
		<Button bgcColor={backgroundColor} onClick={() => onClickHandler(state)}>
			{description} <Icon src={icon} />
		</Button>
	);
};

const Button = styled.button<StyleProps>`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 140px;
	height: 40px;
	font-size: 15px;
	font-weight: bold;
	border-radius: 8px;
	color: #fff;

	background-color: ${props => props.bgcColor};
	box-shadow: 0px 27px 34px rgba(0, 0, 0, 0.22), 0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346),
		0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985), 0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524),
		0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636);
`;

const Icon = styled.img`
	margin-left: 8px;
`;

export default NextQuestionButton;
