<script>
import BaseComponent from '@primevue/core/basecomponent';
import SplitterPanelStyle from 'primevue/splitterpanel/style';

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    style: SplitterPanelStyle,
    provide() {
        return {
            $pcSplitterPanel: this,
            $parentInstance: this
        };
    }
};
</script>
