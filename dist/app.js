"use strict";
var compteur = document.querySelector('#btnClick');
var i = 0;
var _increment = function (e) {
    i++;
    var show = document.querySelector('#content');
    if (show) {
        show.textContent = i.toString();
    }
};
compteur.addEventListener('click', _increment);
var A = /** @class */ (function () {
    function A() {
        this.name = '';
    }
    A.prototype["function"] = function (a) {
        return a;
    };
    return A;
}());
var increment = 0;
var tabs = [
    "me", 'you', 5
];
console.log.apply(console, tabs);
