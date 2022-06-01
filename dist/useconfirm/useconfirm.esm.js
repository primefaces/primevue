import { inject } from 'vue';

const PrimeVueConfirmSymbol = Symbol();

function useConfirm() {
    const PrimeVueConfirm = inject(PrimeVueConfirmSymbol);
    if (!PrimeVueConfirm) {
        throw new Error('No PrimeVue Confirmation provided!');
    } 

    return PrimeVueConfirm;
}

export { PrimeVueConfirmSymbol, useConfirm };
