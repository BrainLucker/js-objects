## Задачи на работу с объектами

1. Напиcать функцию `showExperience`, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. Желательно (но не обязательно) использовать деструктуризацию.

   Пример:
   ```
   showExperience(personalPlanPeter) =>
   '1 month'
   ```

2. Написать функцию `showProgrammingLangs`, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде. При этом функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка. Для переноса строки используется `\n` в конце строки.

   Пример:
   ```
   showProgrammingLangs(personalPlanPeter) =>
   "Язык js изучен на 20% Язык php изучен на 10%"
   ```

3. Создать метод `showAgeAndLangs` внутри объекта `personalPlanPeter`. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. Возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

   Пример:
   ```
   personalPlanPeter.showAgeAndLangs(personalPlanPeter) =>
   'Мне 29 и я владею языками: RU ENG'
   ```

## Задачи на работу с массивами

1. Написать функцию `showFamily`, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате. Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение "Семья пуста".

   Пример:
   ```
   showFamily(family) =>
   'Семья состоит из: Peter Ann Alex Linda'
   ```

2. Написать функцию `standardizeStrings`, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

   Пример:
   ```
   standardizeStrings(favoriteCities) =>
   lisbon
   rome
   milan
   dublin
   ```

3. Написать функцию `reverse`, которая принимает в себя строку и возвращает эту строку в обратном порядке. Функцию можно применить к любой строке. Если в функцию приходит не строка, то вернуть сообщение "Ошибка!".

   Пример:
   ```
   const someString = 'This is some strange string';
   
   reverse(someString) =>
   'gnirts egnarts emos si sihT'
   ```

4. Есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

   ```
   const baseCurrencies = ['USD', 'EUR'];
   const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
   ```
   Нужно создать главную функцию банкомата `availableCurr`, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой, то функция возвращает строку "Нет доступных валют". Функция возвращает строку в нужном виде.

   Пример:
   ```
   availableCurr(['UAH', 'RUB', 'CNY'], 'CNY') =>
   Доступные валюты:
   UAH
   RUB
   ```

   - CNY (юань) исчез из списка валют, значит такая валюта закончилась.
   - После валюты: стоит перенос строки `\n`, и после каждой валюты тоже.
   - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала `baseCurrencies`, потом `additionalCurrencies` по порядку.
