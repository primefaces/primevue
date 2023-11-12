<script>
import BaseComponent from 'primevue/basecomponent';
import InputGroupStyle from 'primevue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
