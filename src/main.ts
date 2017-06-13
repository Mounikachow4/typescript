function addAge(age){
	return function(targetClass){
		return class{
			name = new targetClass().name;
			age = age;
		}
	}
}

@addAge(30)
class Person{
	name = "John";
}
console.log(new Person());