function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; //если элемент больше предыдущего максимума, то максимум становится равен элементу
    }
    if (arr[i] < min) {
      min = arr[i]; //если элемент меньше предыдущего минимума, то минимум становится равен элементу
    }
    sum += arr[i]; //добавляем элемент к сумме sum для последующего вычисления среднего
  }

  let avg = (sum / arr.length).toFixed(2); //вычисляем среднее знакочение и округляем до 2ух знаков

  return { min: min, max: max, avg: Number(avg) };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];      //суммируем эл. массива
  }
  return sum;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;  //возвращаем разницу значений
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];  //увелчивается сумма чётных элементов
    } else {
      sumOddElement += arr[i];  //увелич. сумму нечетных эл.
    }
  }
  return sumEvenElement - sumOddElement;  //возвращение разницы двух элементов
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];  // Увеличиваем сумму чётных элементов
      countEvenElement++;  //увеличиваем на единицу 
    }
  }
  return sumEvenElement / countEvenElement;  //делим сумму результата на их количество
}


function makeWork(arrOfArr, func) {
  let = maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]); //каждый перебираемый элемент передавайте в функцию-насадку. Используйте spread-оператор для разделения массива элементов на отдельные элементы. Результат функции сохраните в отдельную константу

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }        //Если полученное значение больше переменной с максимумом, то переприсваивайте переменную максимума на полученное значение
  }
  return maxWorkerResult;
}
