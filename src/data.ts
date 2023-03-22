type Question = {
	question: string;
	answerA: string;
	answerB: string;
	answerC: string;
	answerD: string;
	currentAnswer: string;
};

type QuizList = {
	quizName: string;
	description: string;
	question: Question[];
};

export const quizData: QuizList[] = [
	{
		quizName: 'Alimals Quiz',
		description: ' Capital City Quiz',
		question: [
			{
				question: 'What is the world’s most populous capital city?',
				answerA: 'London',
				answerB: 'Beijing',
				answerC: 'New Delhi',
				answerD: 'Rome',
				currentAnswer: 'New Delhi',
			},
			{
				question: 'What is the capital of Turkey?',
				answerA: 'Istanbul',
				answerB: 'Antalya',
				answerC: 'Ankara',
				answerD: 'Konya',
				currentAnswer: 'Ankara',
			},
			{
				question: 'Which country is Prague the capital of?',
				answerA: 'Poland',
				answerB: 'Czechia',
				answerC: 'Romania',
				answerD: 'Portugal',
				currentAnswer: 'Czechia',
			},
			{
				question: 'What is the capital of Mexico?',
				answerA: 'Merida',
				answerB: 'Oaxaca',
				answerC: 'Guadalajara',
				answerD: 'Mexico City',
				currentAnswer: 'Mexico City',
			},
			{
				question: 'Which county is Kabul the capital of?',
				answerA: 'Azerbaijan',
				answerB: 'Austria',
				answerC: 'Afghanistan',
				answerD: 'Angola',
				currentAnswer: 'Afghanistan',
			},
		],
	},
];
