<script>
import BaseComponent from 'primevue/basecomponent';
import ConfirmPopupStyle from 'primevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String,
        panelOffsetY: {
            type: Number,
            default: 0
        },
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
