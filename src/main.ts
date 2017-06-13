import 'reflect-metadata';

function example(){
	return function(targetClass){
		const types = Reflect.getMetadata('design:paramtypes', targetClass)
		console.log(types);
		return targetClass;
	}
}

@example()
class Person{
	constructor(name:string, age:number){}
}
@example()
class Cat{
	constructor(lazy:boolean, hair:any){}
}
new Person("John", 10);
