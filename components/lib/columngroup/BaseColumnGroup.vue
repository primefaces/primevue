<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
