class StaticDemo {
  static name1: string; //静态属性“name”与构造函数“StaticDemo”的内置属性函数“name”冲突。
  // constructor(name1: string) {
  //   //构造函数不能通过static进行修饰
  //   this.name1 = name;
  // }
  static sayHi() {
    console.log('hi,', this.name);
  }
}
//const s: StaticDemo = new StaticDemo('summer');
//console.log(s.name1); //属性“name1”在类型“StaticDemo”上不存在。你的意思是改为访问静态成员“StaticDemo.name1”吗?
console.log(StaticDemo.name1); //通过类名.的方式访问该成员数据
StaticDemo.name1 = 'tutu'; //通过类名.的方式设置该成员数据
