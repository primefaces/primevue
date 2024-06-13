<script>
import BaseComponent from '@primevue/core/basecomponent';
import DividerStyle from 'primevue/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $pcDivider: this,
            $parentInstance: this
        };
    }
};
</script>
