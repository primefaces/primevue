this.primevue = this.primevue || {};
this.primevue.useconfirm = (function (exports, vue) {
    'use strict';

    const PrimeVueConfirmSymbol = Symbol();

    function useConfirm() {
        const PrimeVueConfirm = vue.inject(PrimeVueConfirmSymbol);
        if (!PrimeVueConfirm) {
            throw new Error('No PrimeVue Confirmation provided!');
        } 

        return PrimeVueConfirm;
    }

    exports.PrimeVueConfirmSymbol = PrimeVueConfirmSymbol;
    exports.useConfirm = useConfirm;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, Vue);
