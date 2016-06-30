let isDone: boolean = false;

let decLiteral1: number = 0.1;
let decLiteral2: number = 0.1;
let decLiteral3: number = 0.1;

let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log('isDone: ', isDone);

console.log('@, ', decLiteral1 + decLiteral2 + decLiteral3);

let nameValue: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ nameValue }.

I'll be ${ age + 1 } years old next month.`;

console.log('sentence: ', sentence);

const sum = (arg1, arg2) => {
	return arg1 + arg2;
}

console.log('sum: ', sum(2, 3));

let arrayType: [number, string];

arrayType = [12, 'Typess'];
console.log(arrayType[1].substr(1));

// arrayType = ['Typess', 12];
// console.log(arrayType[1].substr(1));

enum Color { Red, Green, Blue }

console.log('Red: ', Color.Red);


let notSure: any = 3;
console.log('NotSure: ', notSure);
notSure = 'not sure';
console.log('NotSure: ', notSure);
notSure = false;
console.log('NotSure: ', notSure);


function warnUser(): void {
	console.log('Test function return type..');
}

warnUser();

let unusable: void = undefined;
let unusable1: void = null;

// let someValue: any = 'Test some value string';
// let someNumber: number = (<string>someValue).length;
// console.log(someValue+', '+someNumber);

for (var i = 0; i < 10; i++) {
	(function(i) {
		setTimeout(function() {console.log(i); }, 100 * i);
	})(i);
}

function keepWholeObject(wholeObject: {a: string, b?: number}) {
	console.log('wholeObject1: ', wholeObject);
    let {a, b = 1001} = wholeObject;
    console.log('wholeObject2: ', wholeObject);
}

keepWholeObject({a:'shi xiao ka'});


interface LabelledValue {
	label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

import { createSquare, SquareConfig } from './interface1'

let square = createSquare({color: 'blue', width: 200});
console.log('square: ', square as SquareConfig);


import sumFunc from './functionType'
let result = sumFunc(1, 3);
console.log('sumFunc = ', result);

import { Dog, Animal } from './extendsT';

let dog1 = new Dog('jinba', 'pipi');
console.log('dog1: ', dog1);
