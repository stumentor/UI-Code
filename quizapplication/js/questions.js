// creating an array and passing the number, questions, options, and answers

let passage={
	"I":[{
		"num": 1,
		"txt": "The children are in the park. Raj is playing with his dog. Its name is Tommy. Deepa and Meena are sitting on a bench. They are talikng and eating popcorn. There is a pond in the park. There are ducks in the pond. Sumi is feeding the ducks in the pond."
	}],
	"II":[{
		"num": 2,
		"txt": "Charley is a six-year-old boy and he loves the holidays. Whenever his school remains closed, he definitely goes to his maternal grandmother’s house with his mother. He loves his grandmother and his grandmother also loves him very much. When Charley goes to his grandmother’s house, she cooks a variety of dishes for him and gives him many toys as well. Charley’s most loving thing in his grandmother’s house is her pet dog which always stays with Charley. Charley not only eats food with the dog but also plays with him most of the time. When he returns to his house, his grandmother gives him fifty rupees every time."
	}]
}
let questions = {
	"I": [{
			"numb": 1,
			"question": "Raj is playing with his?",
			"answer": "Dog",
			"flag": false,
			"options": [
				"Dog",
				"Cat",
				"Doll",
				"Sister"
			]
		},
		{
			"numb": 2,
			"question": "Where are the children?",
			"answer": "Park",
			"flag": false,
			"options": [
				"School",
				"Park",
				"House",
				"Zoo"
			]
		},
		{
			"numb": 3,
			"question": "Who is feeding the ducks in the pond?",
			"answer": "Sumi",
			"flag": false,
			"options": [
				"Deepa",
				"Tommy",
				"Raj",
				"Sumi"
			]
		}
	],
	"II": [{
		"numb": 1,
		"question": "Where does Charley like to go when his school is closed?",
		"answer": "His maternal grandmother’s house",
		"flag": false,
		"options": [
			"His father's mother’s house",
			"His maternal grandmother’s house",
			"His uncle's house",
			"His playhouse house"
		]
	},
	{
		"numb": 2,
		"question": "What is Charley’s most loving thing in his grandmother’s house?",
		"answer": "Her pet dog",
		"flag": false,
		"options": [
			"Her pet dog",
			"Toys",
			"Her hand's food",
			"Treehouse"
		]
	},
	{
		"numb": 3,
		"question": "How old is Charley?",
		"answer": "Six-year-old ",
		"flag": false,
		"options": [
			"Five-yer old",
			"Seven-year-old ",
			"Six-year-old ",
			"Eight-year-old "
		]
	}
]
};