<script>
import BaseComponent from 'primevue/basecomponent';
import ButtonSetStyle from 'primevue/buttonset/style';

export default {
    name: 'BaseButtonSet',
    extends: BaseComponent,
    style: ButtonSetStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
