<script>
import BaseComponent from 'primevue/basecomponent';
import FieldsetStyle from 'primevue/fieldset/style';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
