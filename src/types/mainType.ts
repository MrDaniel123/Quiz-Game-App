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
	isCurrentAnswer: boolean;
	isDisabled: boolean;
	isChosen: boolean;
}

export interface ActualQuiz {
	description: string;
	answers: AnswerStateObj[];
}

export interface NextQuestionType {
	state: string;
}
