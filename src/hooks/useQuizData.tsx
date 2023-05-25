import { useEffect, useState } from 'react';

import { quizData } from '../data';
import { QuizData, Questions, AnswerStateObj } from '../types/mainType';

export const useQuizData = (
	actualSelectedQuiz: QuizData[],
	quizName: string | undefined,
	questionNumber: number,
	isClicked: boolean
) => {
	const [actualQuestion, setActualQUestion] = useState<Questions | null>(null);
	const [actualAnswers, setActualAnswers] = useState<AnswerStateObj[] | null>(null);

	useEffect(() => {
		const actualQuizData = quizData.filter(actualSelectedQuiz => {
			return actualSelectedQuiz.quizName.replace(/\s/g, '') === quizName;
		});

		const answersObject: AnswerStateObj[] = actualQuizData[0].questions[questionNumber].answers.map(
			question => {
				return {
					answer: question,
					state: 'nonClicked',
					isDisabled: false,
					isCorrectAnswer:
						question === actualQuizData[0].questions[questionNumber].currentAnswer ? true : false,
				};
			}
		);

		setActualAnswers(answersObject);
		setActualQUestion(actualQuizData[0].questions[questionNumber]);
	}, []);

	return { actualSelectedQuiz, actualAnswers, actualQuestion };
};
