/* eslint-disable @typescript-eslint/no-unused-vars */
// typescript中的数据类型

const a = 123;

const b = 'string';

const c = true;

const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['1', '2', '3'];
const arr3: Array<number> = [1, 2, 3];
const arr4: Array<string> = ['1', '2', '3'];
const anyArr: ang[] = ['1', 23, true];

//元组类型（tuple）属于数组的一种
const arr5: [string, number, boolean] = ['123', 123, true];

//enum 枚举类型
// enum 枚举名（自定义）{标识符 = 整型常数}
enum Name {
  success = 1,
  fail = 0,
}
const data: Name = Name.success; //1

enum Color {
  blue,
  red,
  green,
}
const color: Color = Color.blue; //0 如果不赋值，默认是下标值

enum Flag {
  a,
  b = 5,
  c,
}
const num: Flag = Flag.c; // 6 如果前一个标识符复制则递增

//定义null/undefined/可以定义多种类型
let d: null | undefined;

//viod 函数没有返回值
function fn(): void {
  console.log('函数没有返回值');
}
function fn2(): string {
  return '返回字符串类型';
}

//object类型
function getObj(obj: object): object {
  return {
    name: 'test',
    age: 16,
  };
}

//联合类型
function getString(str: number | string): void {
  console.log(str);
}
//函数传参
function getInfo(name: string, age: number): string {
  return `${name} -- ${age}`;
}
getInfo('123', 1);

//可选参数“?”
function getInfo2(name: string, age?: number): string {
  return `${name} -- ${age}`;
}
getInfo2('123');

//默认参数
function getInfo3(name: string, age = 3): string {
  return `${name} -- ${age}`;
}
getInfo3('123');

//剩余参数（rest参数）
//剩余参数是放在函数声明的时候所有参数的最后
function restFn(str: string, ...args: any[]) {
  console.log(str);
  console.log(args);
}
restFn('1', '2', 'b', 6, 8);

//函数重载
function resetFn(x: string, y: string): string {
  return x + y;
}
function resetFn(x: number, y: number): number {
  return x + y;
}
resetFn(1, '2');

//函数完整写法
const lastFn: (x: string, y: string) => string = (x: string, y: string): string => {
  return x + y;
};
console.log(lastFn('1', '2'));
/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
//告诉编译器自己知道是什么类型，也知道自己在干什么
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length;
  } else {
    return x.toString().length;
  }
}
console.log(getLength('abcd'), getLength(1234));
