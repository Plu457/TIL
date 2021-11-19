//* console.log(this) === console.log(window)
console.log(this);

var person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName());

function myFunction() {
  console.log(this);
}

myFunction();

function callFunc(obj) {
  console.log(obj);
}

function changeSelect(obj) {
  console.log(obj.value);
}
