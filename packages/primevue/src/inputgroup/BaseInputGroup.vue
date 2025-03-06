<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputGroupStyle from 'primevue-vaultic/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
