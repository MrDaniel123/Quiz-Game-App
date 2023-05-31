export type Answers = {
	answerA: string;
	answerB: string;
	answerC: string;
	answerD: string;
};

export type Questions = {
	questionDescription: string;
	currentAnswer: string;
	answers: string[];
};

export type QuizData = {
	quizName: string;
	description: string;
	questions: Questions[];
};

export interface AnswerStateObj {
	answer: string;
	isClicked: string;
	isDisabled: boolean;
	isCorrectAnswer: boolean;
}
