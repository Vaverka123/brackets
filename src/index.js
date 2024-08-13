module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  bracketsConfig.forEach((el) => (brackets[el[0]] = el[1]));

  const openBrackets = [];
  // запускаем цикл по строке
  ("|()|");
  for (let i = 0; i < str.length; i++) {
    // если элкмент это ключ в объекте, то мы длбавляем его в массив открытых скобок
    if (Object.hasOwn(brackets, str[i])) {
      openBrackets.push(str[i]);
      // если нет, то мы должны получить последнюю открывающую скобку
    } else {
      // мы должны получить её зыкрывающийся тип
      const lastEl = openBrackets.pop();
      // мы должны сравнить наш элемент строки с закрываюзимся типом последеней открывающейся скобки
      const closingBracket = brackets[lastEl];
      if (closingBracket !== str[i]) {
        return false;
      }
    }
  }
  return openBrackets.length === 0;
};
