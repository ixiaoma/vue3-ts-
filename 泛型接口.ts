interface IBaseCRUD<T> {
  data: Array<T>;
  add: (t: T) => T;
  getUserId: (id: number) => T;
}
class User {
  id?: number;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class UserCRUD implements IBaseCRUD<User> {
  data: Array<User> = [];
  add(user: User): User {
    user.id = Date.now() + Math.random();
    this.data.push(user);
    return user;
  }
  getUserId(id?: number): User {
    return this.data.find((user) => user.id === id);
  }
}
const userCRUD: UserCRUD = new UserCRUD();
userCRUD.add(new User('jack', 10));
const { id } = userCRUD.add(new User('tom', 20));
console.log(userCRUD.data);
console.log(userCRUD.getUserId(id));

//泛型类
class GenerClass<T> {
  defaultValue: T | undefined;
}
const test01: GenerClass<number> = new GenerClass<number>();
test01.defaultValue = 100;
console.log(test01.defaultValue);

//泛型约束
interface ILength {
  //定义一个接口，用来约束将来的某个类型中必须要有length这个属性
  length: number;
}
function getLength<T extends ILength>(x: T): number {
  return x.length;
}
console.log(getLength<string>('haha'));
