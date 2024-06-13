import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: 'primevue/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: 'primevue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: 'primevue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: 'primevue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: 'primevue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: 'primevue/animateonscroll' }
]);
