/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(param: T): Promise<T> {
  return new Promise((resolve) => {
    resolve(param);
  });
}

type Response = [string, number];
const arg: Response = ["Text", 50];

getPromise<Response>(arg).then((data) => {
  console.log(data);
});

getPromise<string>("string").then((data) => {
  console.log(data);
});

export {};

// не зрозумів що треба зробити в завданні якщо в дженеріку ми не знаємо який тип повертаємо