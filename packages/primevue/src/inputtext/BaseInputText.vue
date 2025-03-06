<script>
import BaseInput from '@primevue/core/baseinput';
import InputTextStyle from 'primevue-vaultic/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
