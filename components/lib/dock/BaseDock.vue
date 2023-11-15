<script>
import BaseComponent from 'primevue/basecomponent';
import DockStyle from 'primevue/dock/style';

export default {
    name: 'BaseDock',
    extends: BaseComponent,
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        model: null,
        class: null,
        style: null,
        tooltipOptions: null,
        menuId: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        'aria-label': {
            type: String,
            default: null
        },
        'aria-labelledby': {
            type: String,
            default: null
        }
    },
    style: DockStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
