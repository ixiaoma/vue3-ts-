//存取器：让我们可以有效的控制对 对象中的成员放访问，通过getters和setters来进行操作
class GetSet {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    //读取器：负责读取数据
    console.log('-------获取中------');
    return this.firstName + '-' + this.lastName;
  }
  set fullName(val) {
    console.log('-------设置中-------');
    const names = val.split('_');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}
const p = new GetSet('东方', '不败');
console.log(p);
p.fullName = '诸葛_孔明';
console.log(p);
