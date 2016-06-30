class Animal {
	type: string;
	constructor(type){
		this.type = type;
	}
}

class Dog extends Animal { 
	constructor(type, name){
		super(type);
		this.name = name;
	}

	name: string;
}

export { Animal, Dog };