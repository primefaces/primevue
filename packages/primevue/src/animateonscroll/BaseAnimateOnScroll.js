import BaseDirective from '@primevue/core/basedirective';
import AnimateOnScrollStyle from 'primevue/animateonscroll/style';

const BaseAnimateOnScroll = BaseDirective.extend({
    style: AnimateOnScrollStyle
});

export default BaseAnimateOnScroll;
