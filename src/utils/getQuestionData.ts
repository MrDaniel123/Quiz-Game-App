import {quizList} from '../data';

export const getQuizData = (actualSelectedQuizName: string | undefined) => {
    return quizList.filter(quiz => {
        if (actualSelectedQuizName === quiz.quizName.replace(/\s/g, '')) {
            return quiz;
        }
    });
};
