<script>
import BaseComponent from '@primevue/core/basecomponent';
import BadgeStyle from 'primevue/badge/style';

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
            $pcBadge: this,
            $parentInstance: this
        };
    }
};
</script>
