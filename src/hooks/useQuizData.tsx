import { useEffect, useState } from 'react';

import { quizData } from '../data';
import { QuizData, Questions, AnswerStateObj } from '../types/mainType';

export const useQuizData = (
	actualSelectedQuiz: QuizData[],
	quizName: string | undefined,
	questionNumber: number
) => {
	const [actualQuestion, setActualQUestion] = useState<Questions | null>(null);
	const [actualAnswers, setActualAnswers] = useState<AnswerStateObj[] | null>(null);

	console.log(actualAnswers);

	useEffect(() => {
		const actualQuizData = quizData.filter(actualSelectedQuiz => {
			return actualSelectedQuiz.quizName.replace(/\s/g, '') === quizName;
		});

		const answersObject = actualQuizData[0].questions[questionNumber].answers.map(question => {
			return {
				answer: question,
				state: 'nonClicked',
				isCorrectAnswer:
					question === actualQuizData[0].questions[questionNumber].currentAnswer ? true : false,
			};
		});

		setActualAnswers(answersObject);
		setActualQUestion(actualQuizData[0].questions[questionNumber]);
	}, []);

	return { actualSelectedQuiz, actualAnswers, actualQuestion };
};
