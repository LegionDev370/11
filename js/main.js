// function missingChar(str, num) {
//   let newStr = str.trim().split("");
//   newStr.splice(num, 1);
//   return {
//     oldLength: str.length,
//     value: newStr.join(""),
//     newLength: newStr.length,
//   };
// }
// const missingFunc = missingChar("      Javascript", 3);
// console.log(missingFunc);

// function funcName(num) {
//   let totalEven = 0;
//   let totalOdd = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       totalEven += i;
//     } else {
//       totalOdd += i;
//     }
//   }
//   return {
//     totalEven,
//     totalOdd,
//   };
// }
// const funcNameFunc = funcName(10);
// console.log(funcNameFunc)

// function findMaxNumber(...rest) {
//   let maxNumber = Math.max(...rest);
//   return maxNumber;
// }
// const findMaxNumberFunc = findMaxNumber(12, "34");
// console.log(findMaxNumberFunc)

// function close10(num1, num2) {
//   let number1 = +num1 > 10 ? +num1 - 10 : 10 - +num1;
//   let number2 = +num2 > 10 ? +num2 - 10 : 10 - +num2;
//   if (number1 > number2) {
//     return +num2;
//   } else {
//     return +num1;
//   }
// }
// const close10Func = close10(11, "12");
// console.log(close10Func)

// function repeatedEnd(str, num) {
//   let newStr = str.split("").slice(4, 10).join("");
//   let res = "";
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 1) {
//       res += newStr.toUpperCase();
//     } else {
//       res += newStr.toLowerCase();
//     }
//   }
//   return res;
// }
// const repeatedEndFunc = repeatedEnd("JavaScript", 3);
// console.log(repeatedEndFunc);

// function oneTwo(str) {
//   let newStr = str.trim().split("");
//   let res = "";
//   let removingChar = newStr.splice(0, 1).join("");
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === removingChar) {
//       res += removingChar.toUpperCase();
//       continue;
//     }
//     res += newStr[i];
//   }
//   return {
//     oldLength: str.length,
//     value: res,
//     newLength: res.length,
//   };
// }
// const oneTwoFunc = oneTwo("    tjavascript     ");
// console.log(oneTwoFunc);

// function plusOut(str) {
//   let numbers = [];
//   let res = str.split("").slice(2, 12);
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       numbers.push(+str[i]);
//     }
//   }
//   const num1 = +numbers.slice(0, 2).join("");
//   const num2 = +numbers.slice(2, 4).join("");
//   if (num1 > num2) {
//     res.unshift("+++++");
//     res.push("+++++");
//   } else {
//     res.unshift("-----");
//     res.push("-----");
//   }
//   return res.join("");
// }
// const plusOutFunc = plusOut("23javascript12");
// console.log(plusOutFunc);

// function sleepin(bool1, bool2) {
//   console.log(bool1 === bool2);
// }
// const sleepinFunc = sleepin(true, true);
// console.log(sleepinFunc)

// function makes10(num1, num2) {
//   let res = num1 + num2;
//   if (num1 === 10 || num2 === 10) {
//     return true;
//   } else if (res === 10) return true;
//   else return false;
// }
// const makes10Func = makes10(9, 9);
// console.log(makes10Func);

// function numberSquare(num) {
//   let res = num ** 2;
//   if (res % 2 === 0) {
//     return "even number";
//   } else {
//     return "odd number";
//   }
// }
// const numberSquareFunc = numberSquare(12);
// console.log(numberSquareFunc)

// function numberSum(...rest) {
//   let res = 0;
//   let arr = rest
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i] ** 2;
//   }
//   return res;
// }
// const numberSumFunc = numberSum(1, 2, 3, 4);
// console.log(numberSumFunc)

// function backAround(str) {
//   let strNew = str.trim();
//   let res = [];
//   for (let i = 0; i < strNew.length; i++) {
//     res.push(strNew[i].toUpperCase());
//     if (strNew[i] === strNew[strNew.length - 1]) {
//       res.unshift(strNew[i].toUpperCase());
//       res.push(strNew[i].toUpperCase());
//     }
//   }
//   return res.join("");
// }
// const backAroundFunc = backAround("    Hello    ");
// console.log(backAroundFunc);

// function returnNumber(num) {
//   let res = Math.round(+num);
//   return res;
// }
// const returnNumberFunc = returnNumber("34.9888888");
// console.log(returnNumberFunc)

// function Number1(num) {
//   return Number(num);
// }
// const NumberFunc = Number1(false);
// console.log(NumberFunc)

// function sumDouble(num1, num2) {
//   if (num1 === num2) {
//     return 2 * (num1 + num2);
//   } else {
//     return num1 + num2;
//   }
// }
// const sumDoubleFunc = sumDouble(2, 2);
// console.log(sumDoubleFunc)

// function parrotTrouble(talk, num) {
//   if (!talk) {
//     return false;
//   } else if (num > 20 || num < 7) return true;
//   else return false;
// }
// const parrotTroubleFunc = parrotTrouble(true, 7);
// console.log(parrotTroubleFunc)
