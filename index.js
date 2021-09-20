function filteredArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(function (element) {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });
  return filteredNumbers;
}
console.log(filteredArray([1, 5, 3, 14, 5], 5)),
  console.log(filteredArray([1, 2, 6, 8, 5], 3));
console.log(filteredArray([11, 12, 3, 4, 5], 13));
console.log(filteredArray([9, 22, 7, 4, 15], 10));

console.log(
  '1. верстка валидная + ' + 10,
  '\n',
  '2. 5 семант-их тегов и 4 уник-ых заголовка ' + 18,
  '\n',
  '3. используются css-стили + 10',
  '\n',
  '4. контент в блоке и фон во всю ширину + 10',
  '\n',
  '5. не адаптивная + 0',
  '\n',
  '6. нет бургер-меню + 0',
  '\n',
  '7. аватарка без искажений с атрибутом alt +10',
  '\n',
  '8. контакты и навыки в виде списка ul > li +10',
  '\n',
  '9. перечень информации для CV +10',
  '\n',
  "10. пример кода без подсветки +5",
  '\n',
  "11. без ссылок на мои проекты +0",
  '\n',
  "12. без видео-резюме +0",
  '\n',
  "13. требования к Pull-Request +10",
  '\n',
  "14. дизайн оформления +5",
  '\n',
  "Итого =98"


);

// *
// !
// ?
// TODO
