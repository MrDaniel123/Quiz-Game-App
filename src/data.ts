export type Answers = {
	answerA: string;
	answerB: string;
	answerC: string;
	answerD: string;
};

export type Questions = {
	questionDescription: string;
	currentAnswer: string;
	answers: Answers;
};

export type QuizList = {
	quizName: string;
	description: string;
	questions: Questions[];
};

export const quizData: QuizList[] = [
	{
		quizName: 'City Quiz',
		description: ' Capital City Quiz',
		questions: [
			{
				questionDescription: 'What is the world’s most populous capital city?',
				currentAnswer: 'New Delhi',
				answers: {
					answerA: 'London',
					answerB: 'Beijing',
					answerC: 'New Delhi',
					answerD: 'Rome',
				},
			},
			{
				questionDescription: 'What is the capital of Turkey?',
				currentAnswer: 'Ankara',
				answers: {
					answerA: 'Istanbul',
					answerB: 'Antalya',
					answerC: 'Ankara',
					answerD: 'Konya',
				},
			},
			{
				questionDescription: 'Which country is Prague the capital of?',
				currentAnswer: 'Czechia',
				answers: {
					answerA: 'Poland',
					answerB: 'Czechia',
					answerC: 'Romania',
					answerD: 'Portugal',
				},
			},
			{
				questionDescription: 'What is the capital of Mexico?',
				currentAnswer: 'Mexico City',
				answers: {
					answerA: 'Merida',
					answerB: 'Oaxaca',
					answerC: 'Guadalajara',
					answerD: 'Mexico City',
				},
			},
			{
				questionDescription: 'Which county is Kabul the capital of?',
				currentAnswer: 'Afghanistan',
				answers: {
					answerA: 'Azerbaijan',
					answerB: 'Austria',
					answerC: 'Afghanistan',
					answerD: 'Angola',
				},
			},
		],
	},
];
