import React from 'react';

import styled from 'styled-components';

import negativeMark from '../assets/negativeMark.png';
import positiveMark from '../assets/positiveMark.png';
import arrowMark from '../assets/arrow.png';

type Props = {
	state: 'check-answer-negatiwe' | 'check-answer-positive' | 'go-to-next-question';
	onClickHandler: () => void;
};

const NextQuestionButton = ({ onClickHandler, state }: Props) => {
	if (state === 'check-answer-negatiwe') {
		return (
			<Button disabled={true} onClick={onClickHandler}>
				Check Answer <Icon src={negativeMark} alt='' />
			</Button>
		);
	} else if (state === 'check-answer-positive') {
		return (
			<Button onClick={onClickHandler}>
				Check Answer <Icon src={positiveMark} alt='' />
			</Button>
		);
	} else if (state === 'go-to-next-question') {
		return (
			<Button onClick={onClickHandler}>
				Check Answer <Icon src={arrowMark} alt='' />
			</Button>
		);
	} else return null;
};

const Button = styled.button`
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

	background: linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), #66b700;
	box-shadow: 0px 27px 34px rgba(0, 0, 0, 0.22), 0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346),
		0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985), 0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524),
		0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636);
`;

const Icon = styled.img`
	margin-left: 8px;
`;

export default NextQuestionButton;
