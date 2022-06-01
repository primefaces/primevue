this.primevue = this.primevue || {};
this.primevue.usetoast = (function (exports, vue) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, Vue);
