// What is duck typing...

// First thing to remember that an object has two state
// 1. Fresh
// 2. Stale

// What is Fresh State
// When we give re-init. the object, like...
// let a = {Id: 100};
// a = {id: 101};

// What is Stale State
// When we give reference an other object, like...
// let a = {Id: 100};
// let b = {Id: 100, name: 'kamran'};
// a = b;

// lets declare two obj;
let a : {id: number};
let b : {id: number, name: string};

// with duck typing a object of fresh state can be init. with same property as declared
a = {id: 101};
b = {id: 101, name: 'kamran'};
a = {id: 101, name: 'kamran'}; // error no access prop. allowed.
b = {id: 101}; // error no less prop. allowed.

// with duck typing a object of stale state can be init. with more property but not less as declared
a = b; // allow excess property
b = a; // error less property not allowed.

// Little Bit Diffrence in Classes
class A {
  name: string
  constructor(name:string) {
    this.name = name
  }
}
class B {
  name: string
  name2: string
  constructor(name, name2:string) {
    this.name2 = name2;
    this.name = name;
  }
}

let q = new A ('kamran');
let r = new B ('Yusuf','Qutab');

q = r; // Stale State with excess property but q does have intellisense excess property.
q = new B ('kamran', 'qadri'); // Fresh State with excess property where it should gives error as dealing with object but q does have intellisense excess property.

q.name
q.name2 // Error so how can we access...

alert(q['name2']);
alert(q instanceof A); //False
alert(q instanceof B); //True

// so why we have this strict rule in object compare to class which can be explaned
// link => https://github.com/Microsoft/TypeScript/issues/5303

/*
DanielRosenwasser:
Object literals have an associated freshness before they're bound to a variable. The same doesn't apply for any other expressions.
The idea is that object literals are often used for option bags (where the user has to manually type out each property name at each use-site), and this behavior catches typos.
If you'd like to prevent Animal from being assigned to a Human, you can add a private property to Animal, since private and protected properties need to originate from the same declaration to be compatible.
*/
