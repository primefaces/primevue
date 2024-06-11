<script>
import BaseComponent from '@primevue/core/basecomponent';
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
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>
