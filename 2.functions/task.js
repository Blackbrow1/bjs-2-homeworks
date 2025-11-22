function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) {
    return 0;
  }
  
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }
  
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}
