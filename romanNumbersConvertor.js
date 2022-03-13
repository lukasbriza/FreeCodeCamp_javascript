function romanNumbersConvertor(input) {
  let number = input;

  /* 0 - jednotky; 1 - desítky; 2-stovky; 3-tisíce */
  let order = number.length - 1;
  let numberArr = Array.from(number);
  let resultArr = [];
  //Loop through number order
  for (let i = 0; i <= order; i++) {
    let iterationOrder = order - i;
    let orderValue = numberArr[i];

    //Loop through value of order
    if (iterationOrder == 0) {
      if (orderValue < 4 && orderValue != 0) {
        loopFn(orderValue, "I", resultArr);
      }
      if (orderValue == 4) {
        resultArr.push("IV");
      }
      if (orderValue == 5) {
        resultArr.push("V");
      }
      if (orderValue > 5 && orderValue < 9) {
        resultArr.push("V");
        loopFn(orderValue - 5, "I", resultArr);
      }
      if (orderValue == 9) {
        loopFn(10 - orderValue, "I", resultArr);
        resultArr.push("X");
      }
    } else if (iterationOrder == 1) {
      if (orderValue < 4 && orderValue != 0) {
        loopFn(orderValue, "X", resultArr);
      }
      if (orderValue == 4) {
        resultArr.push("XL");
      }
      if (orderValue == 5) {
        resultArr.push("L");
      }
      if (orderValue > 5 && orderValue < 9) {
        resultArr.push("L");
        loopFn(orderValue - 5, "X", resultArr);
      }
      if (orderValue == 9) {
        resultArr.push("XC");
      }
    } else if (iterationOrder == 2) {
      if (orderValue < 4 && orderValue != 0) {
        loopFn(orderValue, "C", resultArr);
      }
      if (orderValue == 4) {
        resultArr.push("CD");
      }
      if (orderValue == 5) {
        resultArr.push("D");
      }
      if (orderValue > 5 && orderValue < 9) {
        resultArr.push("D");
        loopFn(orderValue - 5, "C", resultArr);
      }
      if (orderValue == 9) {
        resultArr.push("CM");
      }
    } else if (iterationOrder == 3) {
      loopFn(orderValue, "M", resultArr);
    } else {
      alert("You can input maximal value of 9999");
    }
  }

  let result = resultArr.join("");
  return result;
}

function loopFn(valueOfIteration, value, array) {
  for (let i = 0; i < valueOfIteration; i++) {
    array.push(value);
  }
}

export { romanNumbersConvertor };
