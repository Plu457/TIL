'use strict';
//* Object-oriendted programming (객체 지향 프로그래밍)
//* class: 객체를 생성하기 위한 일종의 틀, 설계도
//* object: 클래스의 인스턴스

//* 1. Class declarations
class Person {
  //* constructor
  constructor(name, age) {
    //* fields
    this.name = name;
    this.age = age;
  }

  //* methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const plu457 = new Person('Pulan', 19);
console.log(plu457);
plu457.speak();

//* Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//* 3. Fields (public, private)
//* Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//* 4. Static properties and methos
//* Too soon!
class Article {
  static publisher = 'Pulan';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
console.log(article1.publisher);
Article.printPublisher();

//* 5. Inheritance
//* a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('삼각형');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//* 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

//? -----------------------------------------------------------------------
console.log(
  '-------------------------------- 예시 -------------------------------------',
);

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  getModelName() {
    return this.modelName;
  }

  getModelYear() {
    return this.modelYear;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }
}

let car = new Car('ionic', '2021', 'electronic', 4000);
console.log(car.getModelName());
console.log(car.getModelYear());
console.log(car.getPrice());

car.setPrice(5000);
console.log(car.getPrice());

let car2 = new Car('genesis', '2021', 'gasoline', 6500);
console.log(car2.getModelName());
console.log(car2.getModelYear());
console.log(car2.getPrice());

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, 'electronic', price);
    this.chargeTime = chargeTime;
  }

  setCargeTime(time) {
    this.chargeTime = time;
  }

  getChargeTime() {
    return this.chargeTime;
  }
}

let eleCar1 = new ElectronicCar('ionic5', '2021', 4000);
eleCar1.setCargeTime(60);
console.log(eleCar1.getModelName());
console.log(eleCar1.getChargeTime());
