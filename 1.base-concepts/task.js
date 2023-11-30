"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c; //вычисляем дискриминант

  if (discriminant < 0) {
    return arr; //Если дискриминант меньше нуля, то корней нет (пустой массив)
  } else if (discriminant === 0) {
    let root = -b / (2 * a); //Если дискриминант равен нулю, то корень один
    arr.push(root); //добавляем в массив
    return arr;
  } else { //Если дискриминант больше нуля
    let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
    let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(firstRoot, secondRoot);
    return arr;
  }
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let monthlyPercent = percent / 100 / 12; //Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
  let loanBody = amount - contribution; //тело кредита (сумма кредита минус первоначальный взнос)

  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)); //рассчитываем ежемесячный платёж
  let totalAmount = monthlyPayment * countMonths; //  Общая сумма, которую придётся заплатить клиенту

  totalAmount = Math.round(totalAmount * 100) / 100; //Округляем результат до двух значений после запятой

  return totalAmount;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));

