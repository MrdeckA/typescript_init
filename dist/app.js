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
