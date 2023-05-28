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
	const [nextQuestionButtonSatus, setNextQuestionButtonStatus] = useState<
		'check-answer-negatiwe' | 'check-answer-positive' | 'go-to-next-question'
	>('check-answer-negatiwe');

	const actualQuizData = quizData.filter(actualSelectedQuiz => {
		return actualSelectedQuiz.quizName.replace(/\s/g, '') === quizName;
	});

	useEffect(() => {
		console.log('Rerender udeData');

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

	const setActualizeAnswers = (clickedAnawer: string) => {
		const answersObject: AnswerStateObj[] = actualQuizData[0].questions[questionNumber].answers.map(
			answer => {
				let isClicked = 'nonClicked';

				if (clickedAnawer === answer) {
					isClicked = 'clicked';
				}

				return {
					answer: answer,
					state: isClicked,
					isDisabled: true,
					isCorrectAnswer:
						answer === actualQuizData[0].questions[questionNumber].currentAnswer ? true : false,
				};
			}
		);
		setNextQuestionButtonStatus('check-answer-positive');
		setActualAnswers(answersObject);
	};

	return {
		actualSelectedQuiz,
		actualAnswers,
		actualQuestion,
		setActualizeAnswers,
		nextQuestionButtonSatus,
	};
};
