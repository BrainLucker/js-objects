'use strict';

// Задачи на работу с массивами, часть 2

// Третья задача
const someString = 'This is some strange string';

function reverse(str) {
	let result = '';
	if(typeof(str) == 'string') {
		for (let i = str.length - 1; i >= 0; i--) {
			result += str[i];
		}
	} else {
		result = 'Ошибка!';
	}
	return result;
}

console.log(reverse(someString));

// Четвертая задача
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	let result = 'Доступные валюты:\n';
	if (arr.length > 0) {
		arr.forEach(cur => {
			if (cur != missingCurr) {
				result += `${cur}\n`;
			}
		});
	} else {
		result = 'Нет доступных валют';
	}
	return result;
}

console.log(availableCurr(
	[...baseCurrencies, ...additionalCurrencies], 'CNY'));