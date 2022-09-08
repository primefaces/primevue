import { inject } from 'vue';

export const PrimeVueConfirmSymbol = Symbol();

export function useConfirm() {
    const PrimeVueConfirm = inject(PrimeVueConfirmSymbol);

    if (!PrimeVueConfirm) {
        throw new Error('No PrimeVue Confirmation provided!');
    }

    return PrimeVueConfirm;
}
