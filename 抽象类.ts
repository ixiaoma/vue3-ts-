//抽象类：包含抽象方法（抽象方法一般没具体的内容实现），也可以包含实例方法，抽象类是不能被实例化的，为了子类进行实例化及实现内部的抽象方法
//抽象类的目的和作用最终都是为了子类服务
abstract class Animal1 {
  abstract eat(); //抽象方法不能有具体的实现
}
// const ani = new Animal1(); //无法创建抽象类的实例
class Dog1 extends Animal1 {
  eat() {
    console.log('小狗子吃饭');
  }
}
const dog2: Dog1 = new Dog1();
dog2.eat();
