function getArray<T>(value: T, count: number): T[] {
  const arr: Array<T> = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }
  console.log(value);
  return arr;
}
const arr10 = getArray<number>(200, 5);
console.log(arr10);

//多个泛型参数函数
function getMoreArr<k, v>(value1: k, value2: v): [k, v] {
  return [value1, value2];
}
const arr11 = getMoreArr<string, number>('we', 100);
console.log(arr11);
