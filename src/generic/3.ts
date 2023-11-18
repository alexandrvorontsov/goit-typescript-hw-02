/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return Object.assign(objA, objB);
}

export {};

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;
