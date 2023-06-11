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
//@TODO Why this not working in GAMEQUIZSTATE type ??
type QuestionButtonState = {
	questionButtonState: 'check-answer-no-clicked' | 'check-answer-clicked' | 'go-to-next-question';
}

export type GameQuizState =  {
	actualQuiz: QuizData[] | null;
	actualQuestion: ActualQuiz | null
	questionNumber: number;
	questionButtonState: 'check-answer-no-clicked' | 'check-answer-clicked' | 'go-to-next-question';
	showCurrentAnswer : boolean;
	showEndQuizPage: boolean
}



export type ReducerAction =
|{type: 'set-actual-quiz', payload: QuizData[]}
|{type: 'set-actual-question', payload: ActualQuiz}
|{type: 'set-question-number'}
|{type: 'set-next-question-state',payload: 'check-answer-no-clicked' | 'check-answer-clicked' | 'go-to-next-question';}
|{type: 'set-show-current-answer'}
|{type:'set-show-end-quiz-page' };

