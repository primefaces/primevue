<script>
import BaseComponent from 'primevue/basecomponent';
import StepsStyle from 'primevue/steps/style';

export default {
    name: 'BaseSteps',
    extends: BaseComponent,
    props: {
        id: {
            type: String
        },
        model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    style: StepsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
