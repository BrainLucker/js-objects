'use strict';

// Задачи на работу с объектами

// Первая задача
const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(obj) {
		let langs = '';
		for (let lang of obj.skills.languages) {
			langs += ` ${lang.toUpperCase()}`;
		}
		return `Мне ${obj.age} и я владею языками:${langs}`;
	}
};

// Вторая задача
function showExperience(plan) {
	let {skills: {exp}} = plan;
	return exp;
}

console.log(showExperience(personalPlanPeter));

// Третья задача
function showProgrammingLangs(plan) {
	let result = '';
	let {skills: {programmingLangs: langs}} = plan;
	for (let lang in langs) {
		result += `Язык ${lang} изучен на ${langs[lang]}\n`;
	}
	return result;
}

console.log(showProgrammingLangs(personalPlanPeter));