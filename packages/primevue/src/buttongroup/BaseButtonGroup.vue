<script>
import BaseComponent from '@primevue/core/basecomponent';
import ButtonGroupStyle from 'primevue-vaultic/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
