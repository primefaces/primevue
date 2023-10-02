<script>
import BadgeStyle from 'primevue/badge/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseBadge',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    style: BadgeStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
