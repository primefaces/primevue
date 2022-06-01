'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const PrimeVueToastSymbol = Symbol();

function useToast() {
    const PrimeVueToast = vue.inject(PrimeVueToastSymbol);
    if (!PrimeVueToast) {
        throw new Error('No PrimeVue Toast provided!');
    } 

    return PrimeVueToast;
}

exports.PrimeVueToastSymbol = PrimeVueToastSymbol;
exports.useToast = useToast;
