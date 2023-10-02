<script>
import BaseComponent from 'primevue/basecomponent';
import TagStyle from 'primevue/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
