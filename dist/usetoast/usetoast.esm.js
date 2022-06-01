import { inject } from 'vue';

const PrimeVueToastSymbol = Symbol();

function useToast() {
    const PrimeVueToast = inject(PrimeVueToastSymbol);
    if (!PrimeVueToast) {
        throw new Error('No PrimeVue Toast provided!');
    } 

    return PrimeVueToast;
}

export { PrimeVueToastSymbol, useToast };
