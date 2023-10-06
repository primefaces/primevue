<script>
import BaseComponent from 'primevue/basecomponent';
import ScrollTopStyle from 'primevue/scrolltop/style';

export default {
    name: 'BaseScrollTop',
    extends: BaseComponent,
    props: {
        target: {
            type: String,
            default: 'window'
        },
        threshold: {
            type: Number,
            default: 400
        },
        icon: {
            type: String,
            default: undefined
        },
        behavior: {
            type: String,
            default: 'smooth'
        }
    },
    style: ScrollTopStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
