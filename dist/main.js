var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addAge(age) {
    return function (targetClass) {
        return (function () {
            function class_1() {
                this.name = new targetClass().name;
                this.age = age;
            }
            return class_1;
        }());
    };
}
var Person = (function () {
    function Person() {
        this.name = "John";
    }
    return Person;
}());
Person = __decorate([
    addAge(30)
], Person);
console.log(new Person());
