export type Questions = {
	questionDescription: string;
	answerA: string;
	answerB: string;
	answerC: string;
	answerD: string;
	currentAnswer: string;
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
				answerA: 'London',
				answerB: 'Beijing',
				answerC: 'New Delhi',
				answerD: 'Rome',
				currentAnswer: 'New Delhi',
			},
			{
				questionDescription: 'What is the capital of Turkey?',
				answerA: 'Istanbul',
				answerB: 'Antalya',
				answerC: 'Ankara',
				answerD: 'Konya',
				currentAnswer: 'Ankara',
			},
			{
				questionDescription: 'Which country is Prague the capital of?',
				answerA: 'Poland',
				answerB: 'Czechia',
				answerC: 'Romania',
				answerD: 'Portugal',
				currentAnswer: 'Czechia',
			},
			{
				questionDescription: 'What is the capital of Mexico?',
				answerA: 'Merida',
				answerB: 'Oaxaca',
				answerC: 'Guadalajara',
				answerD: 'Mexico City',
				currentAnswer: 'Mexico City',
			},
			{
				questionDescription: 'Which county is Kabul the capital of?',
				answerA: 'Azerbaijan',
				answerB: 'Austria',
				answerC: 'Afghanistan',
				answerD: 'Angola',
				currentAnswer: 'Afghanistan',
			},
		],
	},
];
