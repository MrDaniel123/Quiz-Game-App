import React from 'react';
import { useParams } from 'react-router-dom';

const GameQuiz = () => {
	const { quizName } = useParams();
	return (
		<div>
			GameQuiz <h1>{quizName}</h1>
		</div>
	);
};

export default GameQuiz;
