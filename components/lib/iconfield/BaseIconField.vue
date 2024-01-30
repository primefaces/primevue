<script>
import BaseComponent from 'primevue/basecomponent';
import IconFieldStyle from 'primevue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    props: {
        iconPosition: {
            type: String,
            default: 'right'
        }
    },
    style: IconFieldStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
