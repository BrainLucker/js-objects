'use strict';

// Задачи на работу с массивами, часть 1

// Первая задача
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	let result = 'Семья состоит из:';
	if (arr.length > 0) {
		arr.forEach(function(member) {
			result += ` ${member}`;
		});
	} else {
		result = 'Семья пуста';
	}
	return result;
}

showFamily(family);

// Вторая задача
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(str => console.log(str.toLowerCase()));
}

standardizeStrings(favoriteCities);