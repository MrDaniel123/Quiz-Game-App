import {GameQuizState, QuizData, ReducerAction} from "../types/mainType";


export const initialState : GameQuizState ={
  actualQuiz : null,
  actualQuestion :  null,
  questionNumber: 0 ,
  questionButtonState: 'check-answer-no-clicked',
  showCurrentAnswer: false,
  showEndQuizPage: false
}

export const reducer =(prevState :GameQuizState, action: ReducerAction): GameQuizState =>{
  switch (action.type){
    case "set-actual-quiz":
      return {...prevState, actualQuiz: action.payload, }
    case "set-actual-question":
      return {...prevState, actualQuestion: action.payload}
    case "set-question-number":
      return{...prevState, questionNumber: prevState.questionNumber + 1}
    case "set-next-question-state":
      return{...prevState, questionButtonState: action.payload}
    case "set-show-current-answer":
      return {...prevState, showCurrentAnswer: !prevState.showCurrentAnswer}
    case "set-show-end-quiz-page":
      return{...prevState, showEndQuizPage: !prevState.showEndQuizPage}
    default: throw new Error()
  }
}