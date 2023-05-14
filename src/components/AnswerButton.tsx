import React from 'react';
import styled from 'styled-components';

type Props = {
	answer: string;
};

const AnswerButton = ({ answer }: Props) => {
	return <Container>{answer}</Container>;
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 45px;
	width: 280px;
	background-color: #454242;
	border-radius: 8px;
	font-size: 24px;
	color: #fff;
	font-weight: bold;

	box-shadow: 0px 27px 34px rgba(0, 0, 0, 0.22), 0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346),
		0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985), 0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524),
		0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636);
`;

export default AnswerButton;
