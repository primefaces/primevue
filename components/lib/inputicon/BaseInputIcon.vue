<script>
import BaseComponent from 'primevue/basecomponent';
import InputIconStyle from 'primevue/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
