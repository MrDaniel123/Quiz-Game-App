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
				answers: ['London', 'Beijing', 'New Delhi', 'Rome'],
			},
			{
				questionDescription: 'What is the capital of Turkey?',
				currentAnswer: 'Ankara',
				answers: ['Istanbul', 'Antalya', 'Ankara', 'Konya'],
			},
			{
				questionDescription: 'Which country is Prague the capital of?',
				currentAnswer: 'Czechia',
				answers: ['Poland', 'Czechia', 'Romania', 'Portugal'],
			},
			{
				questionDescription: 'What is the capital of Mexico?',
				currentAnswer: 'Mexico City',
				answers: ['Merida', 'Oaxaca', 'Guadalajara', 'Mexico City'],
			},
			{
				questionDescription: 'Which county is Kabul the capital of?',
				currentAnswer: 'Afghanistan',
				answers: ['Azerbaijan', 'Austria', 'Afghanistan', 'Angola'],
			},
		],
	},
	{
		quizName: 'QUiz 2',
		description: ' Capital City Quiz',
		questions: [
			{
				questionDescription: 'What is the world’s most populous capital city?',
				currentAnswer: 'New Delhi',
				answers: ['London', 'Beijing', 'New Delhi', 'Rome'],
			},
			{
				questionDescription: 'What is the capital of Turkey?',
				currentAnswer: 'Ankara',
				answers: ['Istanbul', 'Antalya', 'Ankara', 'Konya'],
			},
			{
				questionDescription: 'Which country is Prague the capital of?',
				currentAnswer: 'Czechia',
				answers: ['Poland', 'Czechia', 'Romania', 'Portugal'],
			},
			{
				questionDescription: 'What is the capital of Mexico?',
				currentAnswer: 'Mexico City',
				answers: ['Merida', 'Oaxaca', 'Guadalajara', 'Mexico City'],
			},
			{
				questionDescription: 'Which county is Kabul the capital of?',
				currentAnswer: 'Afghanistan',
				answers: ['Azerbaijan', 'Austria', 'Afghanistan', 'Angola'],
			},
		],
	},
	{
		quizName: 'Qioz 3',
		description: ' Capital City Quiz',
		questions: [
			{
				questionDescription: 'What is the world’s most populous capital city?',
				currentAnswer: 'New Delhi',
				answers: ['London', 'Beijing', 'New Delhi', 'Rome'],
			},
			{
				questionDescription: 'What is the capital of Turkey?',
				currentAnswer: 'Ankara',
				answers: ['Istanbul', 'Antalya', 'Ankara', 'Konya'],
			},
			{
				questionDescription: 'Which country is Prague the capital of?',
				currentAnswer: 'Czechia',
				answers: ['Poland', 'Czechia', 'Romania', 'Portugal'],
			},
			{
				questionDescription: 'What is the capital of Mexico?',
				currentAnswer: 'Mexico City',
				answers: ['Merida', 'Oaxaca', 'Guadalajara', 'Mexico City'],
			},
			{
				questionDescription: 'Which county is Kabul the capital of?',
				currentAnswer: 'Afghanistan',
				answers: ['Azerbaijan', 'Austria', 'Afghanistan', 'Angola'],
			},
		],
	},
];
