<script>
import BaseEditableHolder from '@primevue/core/baseeditableholder';
import RadioButtonGroupStyle from 'primevue-vaultic/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
