import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'usePrimeVue', as: 'usePrimeVue', from: 'primevue/config' },
    { name: 'useStyle', as: 'useStyle', from: 'primevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'primevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'primevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'primevue/usedialog' }
]);
