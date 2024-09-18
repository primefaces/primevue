<script>
import BaseComponent from '@primevue/core/basecomponent';
import FloatLabelStyle from 'primevue/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {
        variant: {
            type: String,
            default: 'over'
        }
    },
    style: FloatLabelStyle,
    provide() {
        return {
            $pcFloatLabel: this,
            $parentInstance: this
        };
    }
};
</script>
