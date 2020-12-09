import { inject } from 'vue';

export const PrimeVueSymbol = Symbol();

export function usePrimeVue() {
    const PrimeVue = inject(PrimeVueSymbol);
    if (!PrimeVue) {
        throw new Error('PrimeVue is not installed!');
    } 
    
    return PrimeVue;
}