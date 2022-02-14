//总结：接口和接口之间叫继承（使用extends关键字），类和接口之间叫实现（使用的是implements）
const ITestFn = () => {
  interface IFly {
    fly();
  }
  interface ISwim {
    swim();
  }
  //接口继承接口
  interface IExt extends IFly {
    ext();
  }
  //一个类可以实现多个接口
  class Person implements IExt, ISwim {
    fly() {
      console.log('im fly');
    }
    ext() {
      console.log('im ext');
    }
    swim() {
      console.log('im swim');
    }
  }
  const person = new Person();
  person.ext();
  person.swim();
};
ITestFn();
