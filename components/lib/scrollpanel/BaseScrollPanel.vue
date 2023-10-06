<script>
import BaseComponent from 'primevue/basecomponent';
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
            $parentInstance: this
        };
    }
};
</script>
