import { inject } from 'vue';

export const PrimeVueDialogSymbol = Symbol();

export function useDialog() {
    const PrimeVueDialog = inject(PrimeVueDialogSymbol);

    if (!PrimeVueDialog) {
        throw new Error('No PrimeVue Dialog provided!');
    }

    return PrimeVueDialog;
}
