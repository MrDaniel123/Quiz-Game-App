import { QuizData } from '../types/mainType';

export const getActualQuestion = (actualQuiz: QuizData[], numberOfQuestion: number) => {
	const actualQuestion = actualQuiz[0].questions[numberOfQuestion];

	const answersData = actualQuestion.answers.map(answer => {
		let isCurrentAnswer = false;
		if (answer === actualQuestion.currentAnswer) {
			isCurrentAnswer = true;
		}

		return {
			answer: answer,
			isCurrentAnswer: isCurrentAnswer,
			isDisabled: false,
			isChosen: false,
		};
	});

	return {
		description: actualQuestion.questionDescription,
		answers: answersData,
	};
};
