export type Questions = {
    questionDescription: string;
    currentAnswer: string;
    answers: string[];
};

export type QuizObj = {
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

export interface ActualQuizObj {
    description: string;
    answers: AnswerStateObj[];
}


export type GameQuizState = {
    actualQuiz: QuizObj[] | null;
    actualQuestion: ActualQuizObj | null
    questionNumber: number;
    questionButtonState: 'check-answer-no-clicked' | 'check-answer-clicked' | 'go-to-next-question';
    showCurrentAnswer: boolean;
    showEndQuizPage: boolean
}


export type ReducerActionType =
    | { type: 'set-actual-quiz', payload: QuizObj[] }
    | { type: 'set-actual-question', payload: ActualQuizObj }
    | { type: 'set-question-number' }
    | { type: 'set-next-question-state', payload: 'check-answer-no-clicked' | 'check-answer-clicked' | 'go-to-next-question'; }
    | { type: 'set-show-current-answer' }
    | { type: 'set-show-end-quiz-page' };

