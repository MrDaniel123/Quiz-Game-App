import React from 'react';
import styled from 'styled-components';

type Props = {
	description: string;
	answerNumber: number;
	totalAnswer: number;
};

const QuestionDescription = ({ description, answerNumber, totalAnswer }: Props) => {
	console.log(description, answerNumber, totalAnswer);

	return (
		<Container>
			<h2>
				Question {answerNumber}/{totalAnswer}
			</h2>
			<h3>{description}</h3>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	height: 120px;
	width: 280px;
	border-radius: 8px;
	background-color: #66b700;
	color: #fff;
	text-align: center;

	filter: drop-shadow(0px 27px 34px rgba(0, 0, 0, 0.22))
		drop-shadow(0px 11.3236px 21.1551px rgba(0, 0, 0, 0.167346))
		drop-shadow(0px 6.90419px 14.1512px rgba(0, 0, 0, 0.142985))
		drop-shadow(0px 4.66806px 8.8193px rgba(0, 0, 0, 0.120524))
		drop-shadow(0px 2.68781px 4.23402px rgba(0, 0, 0, 0.0888636));
`;

export default QuestionDescription;
