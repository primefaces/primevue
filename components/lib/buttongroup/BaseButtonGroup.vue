<script>
import BaseComponent from 'primevue/basecomponent';
import ButtonGroupStyle from 'primevue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
