class Person {
  //定义属性
  name: string;
  age: number;
  sex: string;
  //定义构造函数
  constructor(name = 'lili', age = 16, sex = '女') {
    //更新对象中的属性数据
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  //定义实例方法
  sayHi(str: string) {
    console.log(`大家好，我是${this.name},今年${this.age}岁了,是个${this.sex}孩子,`, str);
  }
}
const person = new Person();
person.sayHi('你呢？');
const person2 = new Person('xiaoliu', 18, '男');
person2.sayHi('拜拜');

//类和类之间如果要有继承关系
class Child extends Person {
  constructor(name = '子类', age = 1, sex = '男') {
    //调用父类中的构造函数，实现子类中属性的初始化操作
    super(name, age, sex);
  }
  sayHi() {
    super.sayHi('子类调用父类中的方法');
  }
}
const child = new Child();
child.sayHi();

//多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法产生了不同的行为
class Animal {
  name: string;
  constructor(name = 'animal') {
    this.name = name;
  }
  run(distance: number) {
    console.log(this.name, `跑了${distance}米远的距离`);
  }
}
class Dog extends Animal {
  [x: string]: any;
  constructor(name = 'summer') {
    super(name);
  }
  run(distance: number) {
    console.log(this.name, `跑了${distance}米远的距离`);
  }
}
const dog: Dog = new Dog();
dog.run(1000);
class Pig extends Animal {
  constructor(name = 'pig') {
    super(name);
  }
  run(distance: number) {
    console.log(this.name, `跑了${distance}米远的距离`);
  }
}
const pig: Pig = new Pig('🐷');
pig.run(100);
const dog1: Animal = new Dog('途途');
dog1.run(800);
const pig1: Animal = new Pig('小猪');
pig1.run(200);

//修饰符（类中成员的修饰符）：主要描述类中成员（属性，构造函数，实例方法）的可访问性
//public修饰符： 公共的，任何位置都可以访问类中的成员
//private修饰符：外部无法访问这个成员数据，子类中也是无法访问该成员数据
//protected修饰符：外部放访问这个成员数据，子类中可以访问该成员数据
class PersonSync {
  readonly name: string;
  private age: number;
  protected sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name; //构造函数中可以对只读属性成员的数据进行修改
    this.age = age;
    this.sex = sex;
  }
  say() {
    this.name = '类中也不能修改';
    console.log(this.name, '类中的成员都有自己的默认访问的修饰符');
  }
}
const sync = new PersonSync('public', 100, '女'); //实例化对象可以为readonly属性赋值
sync.say();
console.log(sync.name);
sync.name = '修改readonly'; //无法分配到 "name" ，因为它是只读属性。
console.log(sync.age); //属性“age”为私有属性，只能在类“PersonSync”中访问。
console.log(sync.sex); //属性“sex”受保护，只能在类“PersonSync”及其子类中访问
class ChildSync extends PersonSync {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex);
  }
  say() {
    console.log(this.age); //属性“age”为私有属性，只能在类“PersonSync”中访问。
    console.log(this.sex);
  }
}
const childSync = new ChildSync('子类', 10, '男');
console.log(childSync.sex); //属性“sex”受保护，只能在类“PersonSync”及其子类中访问。

class ReadonlySync {
  constructor(readonly name: string, public age: number) {} //构造函数中使用修饰符进行修饰，该类中会自动添加一个被修饰的属性
}
const readonlyClass = new ReadonlySync('哈哈', 10);
console.log(readonlyClass.name, readonlyClass.age);
