<script>
import BaseComponent from 'primevue/basecomponent';
import ConfirmPopupStyle from 'primevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
