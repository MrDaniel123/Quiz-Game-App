import { AnswerStateObj } from '../types/mainType';

export const checkCurrentAnswer = (
	actualSelectedAnswers: AnswerStateObj[],
	actualClicledAnswer: string
) => {
	let isClickedCurrentAnswer;

	actualSelectedAnswers.forEach(answer => {
		if (answer.answer === actualClicledAnswer) {
			isClickedCurrentAnswer = true;
		} else {
			isClickedCurrentAnswer = false;
		}
	});

	return isClickedCurrentAnswer;
};
