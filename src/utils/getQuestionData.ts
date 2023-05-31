import { quizList } from '../data';

export const getQuizData = (actualSelectedQuizName: string | undefined) => {
	const actualQuiz = quizList.filter(quiz => {
		if (actualSelectedQuizName === quiz.quizName.replace(/\s/g, '')) {
			return quiz;
		}
	});

	return actualQuiz;
};
