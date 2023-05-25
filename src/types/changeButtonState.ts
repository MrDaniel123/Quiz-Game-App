// if (isClickedCurrectAnswer) {
//   const answersObject = actualSelectedQuiz[0].questions[questionNumber].answers.map(
//     answer => {
//       if (clickedAnswer === answer) {
//         return {
//           answer: answer,
//           state: 'currentAnswer',
//           isCorrectAnswer:
//             answer === actualSelectedQuiz[0].questions[questionNumber].currentAnswer
//               ? true
//               : false,
//         };
//       } else
//         return {
//           answer: answer,
//           state: 'nonClicked',
//           isCorrectAnswer:
//             answer === actualSelectedQuiz[0].questions[questionNumber].currentAnswer
//               ? true
//               : false,
//         };
//     }
//   );
//   // setActualAnswers(answersObject);
// } else {
//   const answersObject = actualSelectedQuiz[0].questions[questionNumber].answers.map(
//     answer => {
//       if (clickedAnswer === answer) {
//         return {
//           answer: answer,
//           state: 'worngAnswer',
//           isCorrectAnswer:
//             answer === actualSelectedQuiz[0].questions[questionNumber].currentAnswer
//               ? true
//               : false,
//         };
//       } else
//         return {
//           answer: answer,
//           state: 'nonClicked',
//           isCorrectAnswer:
//             answer === actualSelectedQuiz[0].questions[questionNumber].currentAnswer
//               ? true
//               : false,
//         };
//     }
//   );
import { AnswerStateObj } from './mainType';

export const changeButtonState = (
	actualSelectedAnswers: AnswerStateObj[],
	answerButtonState: string,
	clickedAnswer: string
) => {
	const actualAnswerDataStructure: any = actualSelectedAnswers.map(answer => {
		if (answer.answer === clickedAnswer) {
			return {
				answer: answer,
				state: 'clicked',
				isDisabled: true,
				isCorrectAnswer: false,
			};
		} else {
			return {
				answer: answer,
				state: 'nonClicked',
				isDisabled: true,
				isCorrectAnswer: false,
			};
		}
	});
	console.log(actualAnswerDataStructure);
	return actualAnswerDataStructure;
};
