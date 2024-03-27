<script>
import BaseComponent from 'primevue/basecomponent';
import ConfirmPopupStyle from 'primevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String,
        rejectButtonProps: {
            type: Object,
            default() {
                return {
                    size: 'small',
                    text: true
                };
            }
        },
        acceptButtonProps: {
            type: Object,
            default() {
                return {
                    size: 'small'
                };
            }
        }
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
