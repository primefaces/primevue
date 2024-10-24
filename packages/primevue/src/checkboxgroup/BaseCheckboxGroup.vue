<script>
import BaseEditableHolder from '@primevue/core/baseeditableholder';
import CheckboxGroupStyle from 'primevue/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
