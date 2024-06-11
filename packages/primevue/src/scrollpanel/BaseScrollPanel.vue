<script>
import BaseComponent from '@primevue/core/basecomponent';
import ScrollPanelStyle from 'primevue/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $pcScrollPanel: this,
            $parentInstance: this
        };
    }
};
</script>
