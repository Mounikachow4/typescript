"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/Observable/timer");
require("rxjs/add/Observable/interval");
Observable_1.Observable.interval(1000).subscribe(function (x) { return console.log(x); });
var App = (function () {
    function App() {
        this.title = "Eggheads";
    }
    App.prototype.getUsers = function () {
        return [{ name: "John" }];
    };
    return App;
}());
console.log(_.isArray(new App().getUsers()));
