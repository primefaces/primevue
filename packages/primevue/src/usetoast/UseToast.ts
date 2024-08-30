import { ToastServiceMethods } from 'primevue/primevue';
import { inject } from 'vue';

export const PrimeVueToastSymbol = Symbol();

export function useToast() {
    const PrimeVueToast = inject<ToastServiceMethods>(PrimeVueToastSymbol);

    if (!PrimeVueToast) {
        throw new Error('No PrimeVue Toast provided!');
    }

    return PrimeVueToast;
}
