module.exports = function check(str, bracketsConfig) {
  // const brackets = {};
  // bracketsConfig.forEach((el) => (brackets[el[0]] = el[1]));

  // const openBrackets = [];
  // // запускаем цикл по строке
  // ("|()|");
  // for (let i = 0; i < str.length; i++) {
  //   // если элкмент это ключ в объекте, то мы длбавляем его в массив открытых скобок
  //   if (Object.hasOwn(brackets, str[i])) {
  //     openBrackets.push(str[i]);
  //     // если нет, то мы должны получить последнюю открывающую скобку
  //   } else {
  //     // мы должны получить её зыкрывающийся тип
  //     const lastEl = openBrackets.pop();
  //     // мы должны сравнить наш элемент строки с закрываюзимся типом последеней открывающейся скобки
  //     const closingBracket = brackets[lastEl];
  //     if (closingBracket !== str[i]) {
  //       return false;
  //     }
  //   }
  // }
  // return openBrackets.length === 0;

  const brackets = {};
  bracketsConfig.forEach((el) => {
    brackets[el[0]] = el[1]; // Create a mapping of opening to closing brackets
  });

  const openBrackets = []; // Stack to keep track of opening brackets

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    // If the current character is an opening bracket
    if (Object.hasOwn(brackets, currentChar)) {
      // Check for the special case where the opening and closing bracket are the same
      if (
        currentChar === brackets[currentChar] &&
        openBrackets[openBrackets.length - 1] === currentChar
      ) {
        openBrackets.pop(); // Remove the last opening bracket from the stack
      } else {
        openBrackets.push(currentChar); // Add to the stack
      }
    } else {
      // If it's a closing bracket, check for matches
      const lastEl = openBrackets.pop(); // Get the last opening bracket
      const closingBracket = brackets[lastEl]; // Find its corresponding closing bracket

      // If there is no matching opening bracket, return false
      if (closingBracket !== currentChar) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are balanced
  return openBrackets.length === 0;
};
